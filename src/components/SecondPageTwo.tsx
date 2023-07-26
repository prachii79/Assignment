import React, { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import departments from "./lists.ts"

interface Department {
  department: string;
  sub_departments: string[];
}

interface CheckedState {
  [department: string]: {
    [sub_department: string]: boolean;
  };
}

const departmentList: Department[] = departments

const SecondPageTwo: React.FC = () => {
  const [checked, setChecked] = useState<CheckedState>(() => {
    const initialState: CheckedState = {};

    departmentList.forEach((deptItem) => {
      initialState[deptItem.department] = {};

      deptItem.sub_departments.forEach((subDept) => {
        initialState[deptItem.department][subDept] = false;
      });
    });

    return initialState;
  });

  
    const updateMainDepartmentChecked = (department: string) => {
      setChecked((prevChecked) => {
        const allSubDepartmentsChecked = departmentList
          .find((deptItem) => deptItem.department === department)
          ?.sub_departments.every((subDept) => prevChecked[department]?.[subDept]);

        const newCheckedState: CheckedState = {
          ...prevChecked,
          [department]: {
            ...prevChecked[department],
            [department]: allSubDepartmentsChecked || false
          }
        };

        return newCheckedState;
      });
    };

    // departmentList.forEach((deptItem) => {
    //   updateMainDepartmentChecked(deptItem.department);
    // })

  const handleCheckboxChange = (department: string, sub_department?: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    if (sub_department) {
      setChecked((prevChecked) => ({
        ...prevChecked,
        [department]: {
          ...prevChecked[department],
          [sub_department]: event.target.checked
        }
      }));
    } else {
      const allSubDepartmentsChecked = departmentList
        .find((deptItem) => deptItem.department === department)
        ?.sub_departments.every((subDept) => checked[department]?.[subDept]);

      const newCheckedState: CheckedState = {
        ...checked,
        [department]: {
          ...checked[department],
          [department]: allSubDepartmentsChecked || false
        }
      };

      departmentList.find((deptItem) => deptItem.department === department)?.sub_departments.forEach((subDept) => {
        newCheckedState[department][subDept] = !allSubDepartmentsChecked;
      });

      setChecked(newCheckedState);
    }
  };

  return (
    <List>
      {departmentList.map((deptItem) => (
        <React.Fragment key={deptItem.department}>
          <ListItem>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Object.values(checked[deptItem.department] || {}).every((value) => value) || false}
                  indeterminate={
                    Object.values(checked[deptItem.department] || {}).some((value) => value) &&
                    !Object.values(checked[deptItem.department] || {}).every((value) => value)
                  }
                  onChange={handleCheckboxChange(deptItem.department)}
                />
              }
              label={deptItem.department}
            />
          </ListItem>
          <FormGroup>
            {deptItem.sub_departments.map((subDept) => (
              <FormControlLabel
                key={subDept}
                control={
                  <Checkbox
                    checked={checked[deptItem.department]?.[subDept] || false}
                    onChange={handleCheckboxChange(deptItem.department, subDept)}
                  />
                }
                label={subDept}
              />
            ))}
          </FormGroup>
        </React.Fragment>
      ))}
    </List>
  );
};

export default SecondPageTwo;