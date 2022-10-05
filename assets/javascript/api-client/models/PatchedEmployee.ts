/* tslint:disable */
/* eslint-disable */
/**
 * Gym SaaS
 * Gym SaaS
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { DepartmentEnum } from './DepartmentEnum';
import {
    DepartmentEnumFromJSON,
    DepartmentEnumFromJSONTyped,
    DepartmentEnumToJSON,
} from './DepartmentEnum';

/**
 * 
 * @export
 * @interface PatchedEmployee
 */
export interface PatchedEmployee {
    /**
     * 
     * @type {number}
     * @memberof PatchedEmployee
     */
    readonly id?: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedEmployee
     */
    readonly user?: number;
    /**
     * Your employee's name.
     * @type {string}
     * @memberof PatchedEmployee
     */
    name?: string;
    /**
     * 
     * @type {DepartmentEnum}
     * @memberof PatchedEmployee
     */
    department?: DepartmentEnum;
    /**
     * Your employee's annual salary.
     * @type {number}
     * @memberof PatchedEmployee
     */
    salary?: number;
    /**
     * 
     * @type {Date}
     * @memberof PatchedEmployee
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof PatchedEmployee
     */
    readonly updatedAt?: Date;
}

/**
 * Check if a given object implements the PatchedEmployee interface.
 */
export function instanceOfPatchedEmployee(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PatchedEmployeeFromJSON(json: any): PatchedEmployee {
    return PatchedEmployeeFromJSONTyped(json, false);
}

export function PatchedEmployeeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedEmployee {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'user': !exists(json, 'user') ? undefined : json['user'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'department': !exists(json, 'department') ? undefined : DepartmentEnumFromJSON(json['department']),
        'salary': !exists(json, 'salary') ? undefined : json['salary'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
    };
}

export function PatchedEmployeeToJSON(value?: PatchedEmployee | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'department': DepartmentEnumToJSON(value.department),
        'salary': value.salary,
    };
}

