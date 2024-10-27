using { incidentapp07 as my } from '../db/schema.cds';

@path: '/service/incidentapp07'
@requires: 'authenticated-user'
service incidentapp07Srv {
  @odata.draft.enabled
  entity Incidents as projection on my.Incidents;
  @odata.draft.enabled
  entity Customers as projection on my.Customers;

  annotate my.Incidents {
    title    @changelog;
    status   @changelog;
  };

  annotate my.Customers with @PersonalData : {
    DataSubjectRole : 'Customer',
    EntitySemantics : 'DataSubject'
  } {
    ID           @PersonalData.FieldSemantics: 'DataSubjectID';
    firstName    @PersonalData.IsPotentiallyPersonal;
    lastName     @PersonalData.IsPotentiallyPersonal;
    email        @PersonalData.IsPotentiallyPersonal;
  };

}