import angular from 'angular';

export default angular.module('customer')
  .component('household', {
    bindings: {
      numberOfDependants: '=',
      dependants: '=',
      setDependantList: '&'
    },
    template: `
      <!-- Box -->
      <div class="box box-solid box-primary">
        <!-- Box header -->
        <div class="box-header">
          <h3 class="box-title">SECTION E - DEPENDANTS AND PEOPLE IN HOUSEHOLD</h3>
        </div><!-- /.box-header-->
        <!-- Box body -->
        <div class="box-body">
          <div class="row">
            <div class="col-md-10 col-lg-8">
              <div class="form-group">
                <label class="col-md-10">How many people in your household will be needing assistance?</label>
                <div class="col-sm-2">
                  <input type="number"
                        id="numberOfDependants"
                        data-ng-model="$ctrl.numberOfDependants"
                        data-ng-change="$ctrl.setDependantList({num: $ctrl.numberOfDependants})"
                        class="form-control"
                        value="1"
                        min="1"
                        max="20">
                </div>
              </div>
            </div>
            <div class="clearfix"></div>
            <div ng-repeat="dependant in $ctrl.dependants track by $index">
              <div class="col-sm-6 col-lg-4">
                <div class="form-group">
                  <label>Name</label>
                  <input type="text"
                        data-ng-model="dependant.name"
                        class="form-control">
                </div>
              </div>
              <div class="col-sm-6 col-lg-4">
                <div class="form-group">
                  <label>Relationship to Applicant</label>
                  <input type="text"
                        data-ng-model="dependant.relationship"
                        class="form-control">
                </div>
              </div>
              <div class="col-sm-6 col-lg-4">
                <div class="form-group">
                  <label>Date of Birth</label>
                  <input type="date"
                        data-ng-model="dependant.dateOfBirth"
                        class="form-control">
                </div>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
        </div><!-- /.box-body -->
      </div><!-- /.box -->
    `
  })
  .name;
