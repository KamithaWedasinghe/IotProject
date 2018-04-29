import { Injectable } from '@angular/core';
import { CommonService } from '../services/common/common.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http'


@Injectable()
export class PayrollMasterService {
    output;
    constructor(private commonsService: CommonService,private http:Http) {

    }
    
    getCompanyDetails(){
        
         return this.commonsService.apiGet('pr', 'getPreReqmentsForUpdate');
     }
     
     updateCompanyDetails(details){
        
        return this.commonsService.apiPost(details,'pr', 'updateCompanyDetails');
    }

    getAllowances(){
       
        return this.commonsService.apiGet('pr', 'getAllAllowances');
    }
    setAllowances(newType){
        let newObj={
            newAllowance:newType}
        return this.commonsService.apiPost(newObj,'pr', 'setAllowanceType');
    }
    getDeductions(){
        
         return this.commonsService.apiGet('pr', 'getAllDeductions');
     }
     setDedctions(newType){
        let newObj={
            newDeduction:newType}
        return this.commonsService.apiPost(newObj,'pr', 'setDeductionType');
    }
    updateAllowances(editType){
        
        return this.commonsService.apiPost(editType,'pr', 'updateAllowanceType');
    }
    updateDeduction(editType){
        return this.commonsService.apiPost(editType,'pr', 'updateDeductionType');
    }
    deleteAllowance(id){
       return this.commonsService.apiGet('pr', 'deleteAllowance/' + id);
    }
    deleteDeduction(id){
       return this.commonsService.apiGet('pr', 'deleteDeduction/' + id);
     }
     createPayRollRunStatus(value){
        return this.commonsService.apiPost(value,'pr','createpayrollstatus');
     }
     getLastPayRollStatus(){
        return this.commonsService.apiGet('pr','getlastpayrollstatus');
    } 
    createPayaroll(value){
        //console.log('ddddd',value);
        return this.commonsService.apiPost(value,'pr','setPayrollRun');
    }
     getCategories(){
       return this.commonsService.apiGet('pr', 'getAllCategories');
     }
     setCategory(newType){
        let newObj={
            newCategoryType:newType}
        return this.commonsService.apiPost(newObj,'pr', 'setCategoryType');
    }
    updateCategories(editType){
        return this.commonsService.apiPost(editType,'pr', 'updateCategoryType');
    }
    deleteCategory(id){
        
        return this.commonsService.apiGet('pr', 'deleteCategory/' + id);
     }
     
    getContributions(){
        return this.commonsService.apiGet('pr', 'getAllContributions');
      }
    setContribution(newType){
         let newObj={
             newContributionType:newType}
        return this.commonsService.apiPost(newObj,'pr', 'setContributionType');
     }
    getCheckList(){
        return this.commonsService.apiGet('pr','checklist');
    }
    createPayRollRunCheckList(value){
        return this.commonsService.apiPost(value,'pr','payrollRunChecklist')
    }
    // checkPayRollDryRun(){
    //     return this.commonsService.apiGet('pr','payrolldryrun');
    // }
    checkPayRollRun(){
        return this.commonsService.apiGet('pr','payrollrun');
    }
    getLastPayRollRunMonth(){
        return this.commonsService.apiGet('pr','getlastpayrollrunmonth');
    }
    updatePayrollRun(value){
       // console.log('value',value);
        return this.commonsService.apiPost(value,'pr','updateEndDate');
    }
       //add attendance by excell
       addAttendanceByExcell(value){
       // console.log(value);
        return this.commonsService.apiPost(value,'pr','addAttendanceByExcell');
    }
        // get payroll run month 
        getLastMonth() {
            return this.commonsService.apiGet('pr', 'getlastpayrollrunmonth');
        }
        getAttendanceDetails(value1,value2) {
            console.log(value1,value2);
            return this.commonsService.apiGet('pr','attendancedetails/'+value1+'/'+value2);
        }
}