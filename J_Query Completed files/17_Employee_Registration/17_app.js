// Form Submission
let empId = 100;
$('#register-form').submit(function (e) {
    // prevent the form submission
    e.preventDefault();
    let employee = {
        empId : empId,
        name : $('#emp_name').val(),
        age : $('#emp_age').val(),
        designation : $('#emp_desg').val(),
        jobLocation : $('#job_location').val()
    };
    empId++;
    displayTableData(employee);
    clearFormFields();
});

// display table data
let displayTableData = (employee) => {
    let tableBody = $('#table_body');
    let tableRow = '';
    tableRow += `<tr>
                <td>${employee.empId}</td>
                 <td>${employee.name}</td>
                  <td>${employee.age}</td>
                   <td>${employee.designation}</td> 
                   <td>${employee.jobLocation}</td>
            </tr>`;
    tableBody.append(tableRow);
};

// Clear the form fields
let clearFormFields = () => {
    $('#emp_name').val('');
    $('#emp_age').val('');
    $('#emp_desg').val('');
    $('#job_location').val('');
};
