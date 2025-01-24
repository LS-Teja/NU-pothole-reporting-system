# Pothole Reporting System

## Project Introduction 
*(Ticket/ Issue: Maintain Notes (README.md) for Pothole Reporting System Proposal #1)*

### Overview
The Pothole Reporting System is a web-based application designed to address one of the most common infrastructure issues faced by urban and rural areas: potholes. This system empowers citizens to report potholes with precise location data and images, ensuring timely responses by relevant authorities. Built using HTML, CSS, and JavaScript, the application emphasizes user-friendliness, accessibility, and data-driven decision-making for efficient road maintenance.

### Key Features

**1. User-Friendly Interface**

- Intuitive design ensures ease of use for individuals of all age groups.
- Includes guided input fields for detailed reporting.
  
**2. Geolocation Tagging** (future enhancement)
- Integrates with mapping APIs to allow users to pinpoint the exact location of potholes.
- Displays reported potholes on an interactive map.
  
**3. File Upload Capability**
- Supports image uploads to validate reports and assist authorities with visual evidence.
  
**4. Dashboard for Authorities** (future enhancement)
- A clean and functional interface for municipal teams to view, sort, and prioritize pothole reports.
- Includes search and filtering options for efficient issue management.
  
**5. Prioritization Mechanism**
- Potholes are sorted by severity, frequency of reports, and geographic proximity to facilitate faster responses.

### Purpose and Objectives
The Pothole Reporting System serves two key stakeholders: the public and local authorities.

#### For Citizens:
- Enables easy reporting of road hazards.
- Encourages civic participation in public infrastructure improvement.

#### For Authorities:
- Provides actionable data for informed decision-making.
- Reduces manual efforts in issue tracking and prioritization.

### Technologies Used
The project utilizes the following technologies:

- **HTML:** Provides the basic structure of the application.
- **CSS:** Styles the application for a modern, responsive design.
- **JavaScript:** Adds interactivity and dynamic functionality to the system.
- **Mapping API:** (e.g., Google Maps API) for geolocation services (This will be used for future enhancements).


### How It Works

- **Reporting:**
Users fill out a form detailing the pothole, including its location and an optional image.

- **Visualization:**
The reported potholes are displayed on a map.

- **Management Dashboard:**
Authorities access the dashboard to view and manage reports.

### Future Enhancements

This project is designed to be scalable. Some planned improvements include:

- **Backend Integration:**
Develop a backend using Node.js or Python for report storage and analytics.
Add user authentication for enhanced security and personalization.

- **Data Analytics:**
Integrate dashboards with analytics to display trends, high-risk areas, and response times.

- **Mobile App:**
Extend functionality to a mobile application for wider accessibility.

- **Notification System:**
Notify users when their reported potholes are addressed.


## Project Planning and Design
*(Ticket/ Issue - Design prototype using Figma and update README.md file #3)*

For the Pothole Reporting System project, I will employ Agile methodology with a Kanban workflow to ensure smooth execution and flexibility. This approach will allow the team to adapt to changes quickly and efficiently while maintaining focus on incremental progress.

### Using GitHub Projects
I will leverage GitHub Projects as a project management tool to create and manage tasks for the development team. Each task will be organized into columns based on its status: To Do, In Progress, In Review and Done. This ensures a transparent and organized workflow.

### Kanban Approach

1. **Backlog:** All tasks, including feature development, bug fixes, and documentation, will be added to the backlog.
2. **Sprint Planning:** Tasks will be selected for each sprint and moved to the To Do column. Each task will be broken into smaller, manageable sub-tasks to ensure steady progress.
3. **In Progress:** As developers begin working on tasks, they will move them to the In Progress column.
4. **In Review:** Tasks successfully implemented will be unit tested in this phase.
5. **Done:** Once completed and reviewed, tasks will be marked as Done and the product will be ready for deployment.

This setup ensures we stay focused on both short-term objectives and long-term goals, using an agile, iterative approach.

### Figma Wireframe and GUI Flow

To design the user interface (UI) and flow of the Pothole Reporting System, I used Figma to create low-fidelity wireframes. The wireframes consist of three frames that demonstrate the flow of interaction with the application.

1. **Start-Up Screen (Frame 1):** This initial frame includes labels, textboxes, a file upload button, and a submit button. All fields are empty, providing a clean form for the user to fill out.
2. **Filled Form (Frame 2):** In this frame, the user enters data into the textboxes and optionally uploads an image (simulating a filled-out form). The form reflects the information entered by the user, showing the values in the textboxes and the uploaded image.
3. **Submission Confirmation (Frame 3):** After the user clicks the Submit Report button, the screen is cleared (reset) and a message appears: "Your report has been submitted successfully!"
   
The frames are connected using connectors to represent the sequence of actions: from filling the form to submitting it, followed by the confirmation message.

#### **Figma Design Link**  
View the wireframe and UI flow of the Pothole Reporting System on Figma:
[Click here to view the design](https://www.figma.com/proto/9aW1XrUT6MXbFdRpmVzdeX/BCC---Pothole-Reporting-System?node-id=0-1&t=IUXVlI4jRLe8eQBa-1)

