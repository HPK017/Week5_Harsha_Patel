"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEmployee = void 0;
const claims_1 = require("../model/claims");
const employee_1 = require("../model/employee");
const shift_1 = require("../model/shift");
const timesheet_1 = require("../model/timesheet");
const createEmployee = (employeeData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { shift, timesheet, claims } = employeeData, employee = __rest(employeeData, ["shift", "timesheet", "claims"]);
        const shiftRecord = yield shift_1.Shift.create(shift);
        const timesheetRecord = yield timesheet_1.TimeSheet.create(timesheet);
        const claimsRecord = yield claims_1.Claims.create(claims);
        const newEmployee = yield employee_1.Employee.create(Object.assign(Object.assign({}, employee), { shiftsID: shiftRecord.id, timesheetid: timesheetRecord.id, claimsId: claimsRecord.id }));
        if (newEmployee) {
            return newEmployee;
        }
    }
    catch (err) {
        throw err;
    }
});
exports.createEmployee = createEmployee;
//# sourceMappingURL=employeeService.js.map