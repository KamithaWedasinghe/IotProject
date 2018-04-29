import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { CommonService } from '../services/common/common.service';
//import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class WishHospitalService {
    output;
    constructor(private commonsService: CommonService) {

    }

    getPatientsWithFemale() {
        return this.commonsService.apiGet('hm', 'patientWithFemales');
    }

    getPatient(value) {
        return this.commonsService.apiGet('hm', 'male');
    }

    addPatient(values) {
        return this.output = this.commonsService.apiPost(values, 'hm', 'patient');
    }

    updatefemaleparty(sendidandvalue) {

        return this.output = this.commonsService.apiPost(sendidandvalue, 'hm', 'femaleparty/{id}');
    }
    updateMaleParty(sendedvalue){
        return this.output=this.commonsService.apiPost(sendedvalue,'hm','maleparty/{id}');
    }
    updatePatient(sendidandvalue){
        console.log('service',sendidandvalue);
        return this.commonsService.apiPost(sendidandvalue,'hm','upatient');
    }

    gettests() {
        return this.commonsService.apiGet('hm', 'tests');
    }

    addVisit(values) {
        return this.commonsService.apiPost(values, 'hm', 'treatment/maleparty');
    }
    searchPatient(value) {
        return this.commonsService.apiGet('hm', 'searchPatient/' + value);
    }

    searchFemale(value) {
        return this.commonsService.apiGet('hm', 'searchFemale/' + value);
    }
    searchMale(value) {
        return this.commonsService.apiGet('hm', 'searchMale/' + value);
    }

    getTestTreatmentsMedicine() {
        return this.commonsService.apiGet('hm', 'items');
    }
    createDoctorVisit(value) {
        return this.commonsService.apiPost(value, 'hm', 'visit');
    }
    createFemalePartyTreatment(value) {
        // console.log('value',value);
        return this.commonsService.apiPost(value, 'hm', 'treatment/femalemaleparty');
    }
    deleteFemaleTreatment(value) {
        //  console.log('todelete',value);
        return this.commonsService.apiDelete('hm', 'treatment/femalemaleparty/'+value);
    }
    getFemaleTreatments(value) {
        return this.commonsService.apiGet('hm', 'treatment/femalemaleparty/' + value);
    }
    createFemalePartyTest(value) {
         console.log('value',value);
        return this.commonsService.apiPost(value, 'hm', 'test/femaleparty');
    }
    deleteFemaleTest(value) {
        //  console.log('rrrrrrrrrrrrrrrrrrrrreeeeeeeeeeeeeeeeeeeeeeeeeeee',value.visitedId);
        return this.commonsService.apiDelete('hm', 'test/femalemaleparty/'+value);
    }
    deletePatient(value){
        return this.commonsService.apiDelete('hm','patient/'+value);
    }
    createFemalePartyMedicine(value) {
        return this.commonsService.apiPost(value, 'hm', 'medicine/femaleparty');
    }
    deleteFemalePartyMedicine(value) {
        // console.log('vvvvvvvvvvvvv',value);
        return this.commonsService.apiDelete('hm', 'medicine/femalemaleparty/'+value);
    }
    createMalePartyTreatement(value) {
        // console.log('tttttttttttyuhiuhfjhf',value);
        return this.commonsService.apiPost(value, 'hm', 'treatment/maleparty');
    }
    createMalePartyTest(value) {
        //  console.log('tttttttttttyuhiuhfjhf',value);
        return this.commonsService.apiPost(value, 'hm', 'test/maleparty');
    }
    createMalePartyMedicine(value) {
        //console.log('tttttttttttyuhiuhfjhf',value);
        return this.commonsService.apiPost(value, 'hm', 'medicine/maleparty');
    }
    deleteMaleTest(value) {
        return this.commonsService.apiDelete('hm', 'test/maleparty/'+value);
    }
    deleteMalePartyMedicine(value) {
        return this.commonsService.apiDelete('hm', 'medicine/maleparty/'+value);
    }
    deleteMaleTreatment(value) {

        //  console.log('tttttttttttyuhiuhfjhf',value);
        return this.commonsService.apiDelete('hm', 'treatment/maleparty/' + value);
    }
    getVisitedmalefemaleDetails(value) {
        return this.commonsService.apiGet('hm', 'patientdata/' + value);
    }
    getVisitDetails(value) {
        return this.commonsService.apiGet('hm', 'visit/' + value);
    }
    loginToHospitalManagement(value) {
       console.log("value==",value);
         return this.commonsService.apiPost(value,'acclab','login');
    }
    updateFemalePartyTest(value){
      // console.log('service',value);
        return this.commonsService.apiPost(value,'hm','utest/femaleparty');
    }
    updateFemalePartyTreatment(value){
      //  console.log('ttttttttttt',value);
        return this.commonsService.apiPost(value,'hm','utreatment/femaleParty');
    }
    updateFemalePartyMedicine(value){
        //  console.log('ttttttttttt',value);
          return this.commonsService.apiPost(value,'hm','umedicine/femaleParty');
      }
      updateMalePartyTest(value){
         console.log('ttttttttttt',value);
          return this.commonsService.apiPost(value,'hm','utest/maleParty');
      }

      addEmployerRegistationDetail(value){
        console.log(value)
        return this.commonsService.apiPost(value,'pr','');
        
    }
}