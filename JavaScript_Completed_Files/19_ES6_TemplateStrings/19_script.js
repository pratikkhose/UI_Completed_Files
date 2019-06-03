let employee = {
    empId : 1001,
    empName : 'Rajan',
    empEmail : 'rajan@gmail.com',
    designation : 'Manager'
};
let tableBody = document.querySelector('#t_body');

// string Concatenation
let htmlString = "<tr style='background-color: lightgreen'>" + "\n" +
                    "<td>" + employee.empId + "</td>" + "\n" +
                    "<td>" + employee.empName + "</td>" + "\n" +
                    "<td>" + employee.empEmail + "</td>" + "\n" +
                    "<td>" + employee.designation + "</td>" + "\n" +
                 "</tr>";

tableBody.innerHTML = htmlString;

// Template String (Back Tick Operator)
let templateString = `<tr style="background-color: lightblue">
                        <td>${employee.empId}</td>
                        <td>${employee.empName}</td>
                        <td>${employee.empEmail}</td>
                        <td>${employee.designation}</td>
                      </tr>`;
tableBody.innerHTML = templateString;