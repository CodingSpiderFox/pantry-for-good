import React from 'react'
import ReactDOM from 'react-dom'
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import Autosuggest from 'react-bootstrap-autosuggest'
import DatePicker from 'react-bootstrap-date-picker'

import { Box, BoxHeader, BoxBody } from '../../../../components/box'

export default class RegisterFoodForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formInputFields: {
        ean: this.props.registerFood ? this.props.registerFood.ean : "",
        name: this.props.registerFood ? this.props.registerFood.name : "",
        unitNetWeightGrams: this.props.registerFood ? this.props.registerFood.unitNetWeightGrams : "",
        kcalPer100g: this.props.registerFood ? this.props.registerFood.kcalPer100g : "",
        expireDate: this.props.registerFood ? this.props.registerFood.expireDate : "",
      },
      validInput: false,
      //touched input fields
      touched: { ean: false, foodName: false, unitNetWeightGrams: false, kcalPer100g: false, expireDate: false },
    }
  }

  componentWillReceiveProps = nextProps => {
    // If the modal is open and a save is complete, close the modal
    if (this.props.saving && !nextProps.saving && !nextProps.saveError) {
      this.props.closeModal()
    }
  }

  getValidationState = {
    // The following functions validate the individual input fields and return the validation state used for react-bootstrap-table
    foodName: () =>
      !this.state.touched.foodName || this.state.formInputFields.name.trim().length ? null : 'error',
    ean: () =>
      !this.state.touched.ean || this.state.formInputFields.ean.trim().length ? null : 'error',
    unitNetWeight: () =>
      !this.state.touched.unitNetWeight || (this.state.formInputFields.unitNetWeightGrams !== "" && this.state.formInputFields.unitNetWeightGrams >= 0) ? null : 'error',
    kcalPer100g: () =>
      !this.state.touched.kcalPer100g || (this.state.formInputFields.kcalPer100g !== "" && this.state.formInputFields.kcalPer100g >= 0) ? null : 'error',
    expireDate: () =>
      !this.state.touched.expireDate || (this.state.formInputFields.expireDate !== "") ? null : 'error',
    // This returns true or false if all fields are valid
    all: () =>
      this.state.formInputFields.name.trim().length > 0 &&
      this.state.formInputFields.ean !== "" &&
      this.state.formInputFields.unitNetWeightGrams >= 0 &&
      this.state.formInputFields.kcalPer100g >= 0 &&
      this.state.formInputFields.expireDate !== ""
  }

  /**
   * Re-computes the value for state.validInput
   */
  validate = () => {
    this.setState({ validInput: this.getValidationState.all() && this.checkChanged() })
  }

  /**
   *  check whether newly edited values are different from the inital values
   */
  checkChanged = () => {
    const initialformInputFields = {
      name: this.props.registerFood ? this.props.registerFood.name : "",
      name: this.props.registerFood ? this.props.registerFood.ean : "",
      name: this.props.registerFood ? this.props.registerFood.unitNetWeightGrams : "",
      name: this.props.registerFood ? this.props.registerFood.kcalPer100g : "",
      name: this.props.registerFood ? this.props.registerFood.expireDate : "",
    }
    return Object.keys(this.state.formInputFields).map(key =>
      initialformInputFields[key] !== this.state.formInputFields[key]
    ).reduce((acc, x) => acc || x, false)
  }

  /**
   * looks up whether the items already is registered
   */
  lookupEan = {
    
  }

  /**
   * functions to handle any changes of user input fields in the register form
   */
  handleChange = {
    foodName: value => {
      if (typeof value === 'object' && value !== null) {
        // The user entered an existing food name and autosuggest provided the object for that food
        this.setState({
          formInputFields: {
            ...this.state.formInputFields,
            name: value.name,
            ean: value.ean
          },
          touched: { ...this.state.touched, foodName: true }
        })
      } else {
        // The user entered a food name that was not found by autosuggest
        this.setState({
          formInputFields: {
            ...this.state.formInputFields,
            name: value || ""
          },
          touched: { ...this.state.touched, foodName: true }
        }, this.validate)
      }
    },
    ean: e =>
      this.setState({
        formInputFields: { ...this.state.formInputFields, ean: e.target.value },
        touched: { ...this.state.touched, ean: true }
      }, this.validate),
    unitNetWeightGrams: e =>
      this.setState({
        formInputFields: { ...this.state.formInputFields, unitNetWeightGrams: e.target.value },
        touched: { ...this.state.touched, unitNetWeightGrams: true }
      }, this.validate),
    kcalPer100g: e =>
      this.setState({
        formInputFields: { ...this.state.formInputFields, kcalPer100g: e.target.value },
        touched: { ...this.state.touched, kcalPer100g: true }
      }, this.validate),
    expireDate: e =>
      this.setState({
        formInputFields: { ...this.state.formInputFields, expireDate: e.target.value },
        touched: { ...this.state.touched, expireDate: true }
      }, this.validate)
  }

  registerFood = () => {
    if (this.props.formType === 'Register') {
      this.props.saveFoodItem(
        this.state.formInputFields.ean,
        {
          name: this.state.formInputFields.name,
          ean: this.state.formInputFields.ean,
          unitNetWeightGrams: this.state.formInputFields.unitNetWeightGrams,
          kcalPer100g: this.state.formInputFields.kcalPer100g,
          expireDate: this.state.formInputFields.expireDate
        }
      )}
  }

  componentDidMount = () => {
    ReactDOM.findDOMNode(this.formControlRef).focus()
  }

  render = () => {
    return (
      <Box>
        <BoxHeader>
          Register food
        </BoxHeader>
        <BoxBody
          loading={this.props.loading || this.props.saving}
          error={this.props.saveError}
          errorBottom={true}>
          <form>

            <FormGroup controlId="ean" validationState={this.getValidationState.ean()} >
              <ControlLabel>EAN</ControlLabel>
              <FormControl
                type="number"
                min="0"
                value={this.state.formInputFields.ean}
                placeholder="EAN"
                onChange={this.handleChange.ean}
                onBlur={this.lookupEan}
                inputRef={ref => { this.eanFormControl = ref }}
                ref={(c)=>this.formControlRef=c}
              />
            </FormGroup>

            <FormGroup controlId="foodName" validationState={this.getValidationState.foodName()} >
              <ControlLabel>Food Name</ControlLabel>
              <Autosuggest
                value={this.state.formInputFields.name}
                datalist={this.props.foodItems}
                placeholder="Food Name"
                itemValuePropName='name'
                itemReactKeyPropName='name'
                itemSortKeyPropName='nameLowerCased'
                onSelect={this.handleChange.foodName}
              />
            </FormGroup>

            <FormGroup controlId="unitNetWeight" validationState={this.getValidationState.unitNetWeight()} >
              <ControlLabel>Unit net weight (grams)</ControlLabel>
              <FormControl
                type="number"
                min="0"
                value={this.state.formInputFields.unitNetWeightGrams}
                placeholder="Unit net weight"
                onChange={this.handleChange.unitNetWeightGrams}
                inputRef={ref => { this.unitNetWeightGramsFormControl = ref }}
              />
            </FormGroup>

            <FormGroup controlId="kcalPer100g" validationState={this.getValidationState.kcalPer100g()} >
              <ControlLabel>kcal per 100 grams</ControlLabel>
              <FormControl
                type="number"
                min="0"
                value={this.state.formInputFields.kcalPer100g}
                placeholder="kcal per 100 grams"
                onChange={this.handleChange.kcalPer100g}
                inputRef={ref => { this.kcalPer100gFormControl = ref }}
              />
            </FormGroup>

            <FormGroup controlId="expireDate" validationState={this.getValidationState.kcalPer100g()} >
              <ControlLabel>Expire date</ControlLabel>
              <FormControl
                type="date"
                min="0"
                value={this.state.formInputFields.expireDate}
                placeholder="Date"
                onChange={this.handleChange.expireDate}
                inputRef={ref => { this.expireDateFormControl = ref }}
              />
            </FormGroup>

          </form>
          <div className="pull-right btn-toolbar">
            <Button className={this.state.validInput && 'btn-success'}
              onClick={this.props.registerFood}>Add</Button>
            <Button className={this.state.validInput && 'btn-success'}
              onClick={this.registerFood}
              disabled={!this.state.validInput || this.props.saving}>
              Add + add another
            </Button>
          </div>
        </BoxBody>
      </Box>
    )
  }
}
