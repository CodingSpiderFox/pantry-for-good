import angular from 'angular';

export default angular.module('customer')
  .component('waiver', {
    bindings: {
      customer: '=',
      organization: '='
    },
    template: `
      <!-- Box -->
      <div class="box box-solid box-primary">
        <!-- Box header -->
        <div class="box-header">
          <h3 class="box-title">SECTION F - CLIENT RELEASE AND WAIVER OF LIABILITY</h3>
        </div><!-- /.box-header-->
        <!-- Box body -->
        <div class="box-body">
          <p>
            This release and waiver of liability (the “release”) executed on date signed by the signee “the client”, ON BEHALF OF ALL PARTIES RECEIVING ASSISTANCE listed below, releases {{$ctrl.organization}} and each of its directors, trustees, officers, employees, agents, volunteers, affiliates and members (the “releasees").
          </p>
          <p>
            I, the client, release and forever discharge and hold harmless {{$ctrl.organization}} and its successors and assigns from any and all liability, claims, and demands of whatever kind or nature, either in law or in equity, which arise or may hereafter arise from receiving assistance in any form from {{$ctrl.organization}}. I understand and acknowledge that this Release discharges {{$ctrl.organization}} from any liability or claim that I may have against {{$ctrl.organization}} with respect to bodily injury, illness, food poisoning, death, property damage, or any other risks that may result from receiving assistance including discontinued, inadequate or inconsistent assistance. I KNOWINGLY AND FREELY ASSUME ALL SUCH RISKS, both known and unknown, EVEN IF ARISING FROM THE NEGLIGENCE OF THE RELEASES of others, and assume full responsibility for my participation in {{$ctrl.organization}}’s assistance program.
          </p>
          <p>
            Further, I understand that {{$ctrl.organization}} does not assume any responsibility for or obligation to provide me with financial or other assistance, including, but not limited to medical, health or disability benefits or insurance of any nature in the event of my injury, illness, death, damage to my property, and discontinued inadequate or inconsistent assistance. I expressly waive any such claim for compensation or liability on the part of {{$ctrl.organization}} in the event of such injury or medical expenses incurred by me.
          </p>
          <p>
            I UNDERSTAND THAT DESPITE BEST EFFORTS OF THE {{$ctrl.organization}} VOLUNTEERS TO CHECK EXPIRY DATES AND KASHRUT, IT IS SOLELY MY RESPONSIBILITY TO CHECK FOR EXPIRY DATES, KASHRUT, AND TAKE INTO ACCOUNT ANY FOOD ALLERGIES OR SENSITIVITIES AND USE MY BEST JUDGMENT BEFORE CONSUMING ANY FOODS. IF I AM EVER IN DOUBT, I WILL CONTACT THE MANUFACTURER DIRECTLY OR THROW AWAY THE ITEM IN QUESTION. I UNDERSTAND THAT {{$ctrl.organization}} IS NOT OBLIGATED TO PROVIDE ME WITH ASSISTANCE, AND ANY HARM THAT IS CAUSED BY DISCONTINUED, INADEQUATE OR INCONSISTENT ASSISTANCE IS NOT THE RESPONSIBILITY OF {{$ctrl.organization}} AND THE RELEASEES.
          </p>
          <p>
            I expressly agree that this Release is intended to be as broad and inclusive as permitted by the laws of Ontario and Canada and that this Release shall be governed by and interpreted in accordance with those. I agree that in the event that any clause or provision of this Release is deemed invalid, enforceability of the remaining provisions of this Release shall not be affected.
          </p>
          <p>
            BY SIGNING BELOW, I, ON BEHALF OF ALL MEMBERS RECEIVING ASSISTANCE, EXPRESS MY UNDERSTANDING AND INTENT TO ENTER INTO THIS RELEASE AND WAIVER OF LIABILITY, AND FULLY UNDERSTAND ITS TERMS, AND UNDERSTAND THAT I HAVE GIVEN UP SUBSTANTIAL RIGHTS BY SIGNING IT WILLINGLY AND VOLUNTARILY WITHOUT ANY INDUCEMENT.
          </p>
          <p>
            FOR PARENTS/GUARDIANS OF THOSE RECEIVING ASSISTANCE OF MINOR AGE [UNDER AGE 18 AT TIME OF SIGNING]: This is to certify that I, as a parent/guardian with legal responsibility for this participant, do consent and agree to his/her release as provided above of all the Releases and Waivers, and, for myself, my heirs, assigns, and next of kin, I release and agree to indemnify and hold harmless the Releasees from any and all liabilities incident to my minor child’s involvement in receiving assistance, EVEN IF ARISING FROM THE NEGLIGENCE OF THE RELEASEES, to the fullest extent permitted by law.
          </p>
          <p>
            I declare that:
            <ol>
              <li>
                I have advised my dependants and other family/household members that I have provided limited personal information about them for this application. I have showed them the Notice of Collection of Personal Information and I have obtained their consent to the disclosure and use of their personal information in connection with my application.
              </li>
              <li>
                The information I have provided to {{$ctrl.organization}} on this application and supporting documentation is true, accurate and complete in every respect.
              </li>
              <li>
                I have read and understood the information provided in this application package including the Notice of Collection of Personal Information. I understand that {{$ctrl.organization}} is committed to protecting personal information by following responsible information handling practices and in keeping with privacy laws. We collect and use personal data in order to bettwer meet your service needs, for statistical purposes, to inform you about the {{$ctrl.organization}} service you are receiving, and to satisfy government and regulatory obligations. You may also hear from us periodicaaly about other {{$ctrl.organization}} programs, services and opportunities that may interest and benefit you. For more information on {{$ctrl.organization}}'s commitment to privacy, contact {{$ctrl.organization}} Client Services at (289) 963 5900.
              </li>
            </ol>
          </p>
          <div class="row">
            <div class="col-xs-4 col-md-2">
              <div class="form-group">
                <div>
                  <label class="checkbox-inline">
                    <input type="checkbox"
                          data-ng-model="$ctrl.customer.disclaimerAgree"
                          value="true"
                          required><b>I agree</b>
                  </label>
                </div>
              </div>
            </div>
            <div class="col-xs-8 col-md-4">
              <div class="form-group">
                <input data-ng-disabled="!$ctrl.customer.disclaimerAgree"
                      class="form-control"
                      type="text"
                      data-ng-model="$ctrl.customer.disclaimerSign"
                      placeholder="Sign here"
                      required>
              </div>
            </div>
          </div>
        </div><!-- /.box-body -->
      </div><!-- /.box -->
    `
  })
  .name;
