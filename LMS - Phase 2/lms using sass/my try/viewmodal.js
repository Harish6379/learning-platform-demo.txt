// in js to create
// <button type="button" class="btn btn-outline-warning btn-color view-details mb-2" data-toggle="modal" data-target="#viewModal"><i class="fa fa-eye" aria-hidden="true"></i></button>
        $(document).on('click', '.view-details', function() {
            const clickedRow = $(this).closest('tr');
            const modalBody = $('#modal-body');
        
            // Get data from the clicked row
            const name = clickedRow.find('td:eq(0)').text();
            const email = clickedRow.find('td:eq(1)').text();
            const type = clickedRow.find('td:eq(2)').text();
            const course = clickedRow.find('td:eq(3)').text();
            // Build HTML content for the modal body
            const modalContent = `
              <p><strong>UserName:<br></strong> ${name}</p>
              <p><strong>Email:<br></strong> ${email}</p>
              <p><strong>User Type:<br></strong> ${type}</p>
              <p><strong>Course:<br></strong> ${course}</p>
            `;
        
            // Set the content of the modal body
            modalBody.html(modalContent);
        
            // Open the modal
            $('#viewModal').modal('show');
          });

// function nextFunction() {
//   // Your code for the next function
//   console.log("Next function is executed after successful validation.");

//   // Redirect to the new page
//   window.location.href = "../admin/index.html";
// }