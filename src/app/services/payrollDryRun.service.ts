import { Injectable } from '@angular/core';
import { CommonService } from '../services/common/common.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http'


@Injectable()
export class PayrollDryRunService {
    constructor(private commonsService: CommonService) {

    }
    setDryRunCalculations(dateObj) {
        let date = {
            currentDate: dateObj
        }
        return this.commonsService.apiPost(date, 'pr', 'setPayrollDryRunCalculation');
    }
    setPayrollRunCalculations(dateObj) {
        let date = {
            currentDate: dateObj
        }
        return this.commonsService.apiPost(date, 'pr', 'setPayrollRunCalculations');
    }
    
    getcalculations(dateForCompleted) {
      return this.commonsService.apiGet('pr', 'getPayrollcalculations/' +dateForCompleted);
    }
    getErrorCalculations(dateForError) {
     
      return this.commonsService.apiGet('pr', 'getErrorPayrollCalculations/' +dateForError);
            }
    getPayrollCompletedCalculations(dateForCompleted) {
     return this.commonsService.apiGet('pr', 'getPayrollCompletedCalculations/' +dateForCompleted);
              }
    getPayrollErrorCalculations(dateForError) {
      return this.commonsService.apiGet('pr', 'getPayrollErrorCalculations/' +dateForError);
                       }
              
    getAllowancesForView() {
       return this.commonsService.apiGet('pr', 'getAllowancesForView');
    }
    getDeductionForView() {
        return this.commonsService.apiGet('pr', 'getDeductionForView');
     }
    getMonthlyAllowancesForView(date) {
   
        return this.commonsService.apiGet('pr', 'getMonthlyAllowancesForView/' +date);
     }
    getMonthlyDeductionsForView(date) {
      
        return this.commonsService.apiGet('pr', 'getMonthlyDeductionsForView/' +date);
     }
     getPayrollCreateDate() {
        return this.commonsService.apiGet('pr', 'getPayrollCreateDate');
     }

     // get employee salary detail via sending emp ID
     getSalaryDetail(id){
         return this.commonsService.apiPost(id,'pr','getSalaryDetailOfEmployee')
     }
     //get employee detail and salary details
     getAllSalaryDetail(){
         return this.commonsService.apiGet('pr','getAllSalaryDetailsOfEmpoyees')
     }
     getEmployeeSalaryDetailsForBank(){
       
        return this.commonsService.apiGet('pr','getEmployeeSalaryDetailsForBank'); 
    }
    checkDateForRun(startedDateForCheck){
        //console.log("date=",startedDateForCheck);
        return this.commonsService.apiGet('pr','checkDateForRun/' +startedDateForCheck); 
    }
}