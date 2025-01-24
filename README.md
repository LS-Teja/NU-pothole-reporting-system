# Pothole Reporting System (Repository Link - https://github.com/LS-Teja/NU-pothole-reporting-system.git)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Project Introduction 
*(Ticket/ Issue: Maintain Notes (README.md) for Pothole Reporting System Proposal #1)* [Ticket](https://github.com/LS-Teja/NU-pothole-reporting-system/blob/57f6f4af238aef1fe50b873a29edb42eb9904f66/Project%20Proposal%20Ticket.png)

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

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Project Planning and Design
*(Ticket/ Issue - Design prototype using Figma and update README.md file #3)* [Ticket](https://github.com/LS-Teja/NU-pothole-reporting-system/blob/b15b7e7af4851d7c5e66dc7e0fb359698cb6c67d/Design%20Ticket.PNG)

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

### What have we done so far...
Now that we have completed the setup, planning, and design phases, we have laid the groundwork for implementation to begin. These initial efforts have established a solid foundation, with the following tasks successfully completed:

**Git Repository Setup:** A centralized Git repository has been initialized and configured to manage the project's source code and documentation. 
[Project Repository creation](https://github.com/LS-Teja/NU-pothole-reporting-system/blob/b15b7e7af4851d7c5e66dc7e0fb359698cb6c67d/Project%20Repository%20creation.png)

**GitHub Project Board Creation:** A project board has been established to effectively organize, prioritize, and track tasks throughout the project's lifecycle.
[Project Board setup](https://github.com/LS-Teja/NU-pothole-reporting-system/blob/57f6f4af238aef1fe50b873a29edb42eb9904f66/Project%20Board%20Setup.png)

**Documentation Updates:** Systematic updates to the README file have been completed at each phase, reflecting key decisions and progress. In Project Proposal ticket, README.md changes were committed via a Pull Request (PR) that was linked to an existing issue. Upon merging the PR, the issue was automatically closed, which is why there are minimal comments associated with it. In contrast, the Design ticket did not have the issue linked to the PR, leading to it progressing through various stages of the project board with corresponding comments reflecting updates and feedback throughout the process. This distinction explains the difference in visibility and the level of documentation within the tickets.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Project Development Phase

This phase will focus on implementing the backlog, streamlined into three iterations with one task assigned to each iteration, ordered by priority. Each iteration task is documented as a GitHub issue with clear descriptions and relevant screenshots to ensure simplicity, clarity, and alignment throughout the process.

List of tickets created are shown below.

[List of development tickets](https://github.com/LS-Teja/NU-pothole-reporting-system/blob/69c5e588fea92852c0fa93eabe25eafedda3facc/Development%20-%20Tickets.PNG)

I cloned the GitHub repository to Visual Studio Code using SSH to securely access and work on the project files. This allowed me to easily sync my local changes with the remote repository. Below are the commands issued to clone the GitHub repository.

[Commands to clone](https://github.com/LS-Teja/NU-pothole-reporting-system/blob/76b74e1f88f462c9f5d72329180664a855bd2acc/git_clone.PNG)

**Iteration 1**

[Iteration1 Ticket](https://github.com/LS-Teja/NU-pothole-reporting-system/blob/cc3f653636043fb60e544a3dcabe523ac2f30762/Iteration1%20Ticket.png)

After cloning, I focused on implementing Ticket 1 task by creating basic HTML and CSS files. The HTML file includes a simple form with fields for location, description, and an optional photo upload. The CSS file defines styles for the form layout, including input fields, buttons, and responsive design adjustments for smaller screens. This iteration lays the foundation for the user interface, without any form submission or validation functionality.

I committed changes to remote repository after testing it in local using the below commands.

[Commands to git push](https://github.com/LS-Teja/NU-pothole-reporting-system/blob/76b74e1f88f462c9f5d72329180664a855bd2acc/git_push.PNG)

With this, I have developed a Minimum Viable Product (MVP) featuring the foundational structure of the web user interface. The live application has been successfully deployed on GitHub using the repository's Settings → Pages feature, with the deployment configured on the main branch. This serves as a basic, functional layout to serve as a starting point for further enhancements and feature integration.

**Live App deployment** is shown [here](https://github.com/LS-Teja/NU-pothole-reporting-system/blob/27f70c73a5bb94718b1d12c1b00ff68aeacaa893/live_URL.PNG)

You can access Live App [here](https://ls-teja.github.io/NU-pothole-reporting-system/src/home.html)

**Iteration 2**

[Iteration2 Ticket](https://github.com/LS-Teja/NU-pothole-reporting-system/blob/57f6f4af238aef1fe50b873a29edb42eb9904f66/Iteration2%20Ticket.png)

In iteration 2, I implemented HTML form validation by adding the required attribute to necessary fields, ensuring users cannot submit the form without providing essential information. This enhances the user experience by enforcing input validation before submission. Git Push followed to merge changes to remote.

**Iteration 3**

[Iteration3 Ticket](https://github.com/LS-Teja/NU-pothole-reporting-system/blob/57f6f4af238aef1fe50b873a29edb42eb9904f66/Iteration3%20Ticket.png)

In iteration 3, I implemented JavaScript to handle the form submission process. When the user clicks the "Submit Report" button, the form prevents its default behavior, displays a success message ("Your report has been submitted successfully!"), and clears the form fields. The success message is set to disappear automatically after 5 seconds, providing clear confirmation of submission. This behavior ensures a smooth and user-friendly experience. Git Push was done to merge changes from local to remote.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Project Testing Phase

**Enhancement Ticket involving Test Driven development**

[Enhancement Ticket](https://github.com/LS-Teja/NU-pothole-reporting-system/blob/c068fbcc5070433ef497141a3d214215f74b747c/TDD_enhancement.PNG)

I implemented Test-Driven Development (TDD) using Jest to ensure the successful submission of a report. In the app.test.js file, I wrote tests to simulate the form submission process, checking if the success message ("Your report has been submitted successfully!") appears when both required fields (location and description) are filled. By doing this, I verified that the application responds correctly to valid user inputs and that the message is displayed as intended, improving reliability and preventing future issues in the user flow.

`app.test.js` is [here](https://github.com/LS-Teja/NU-pothole-reporting-system/blob/c068fbcc5070433ef497141a3d214215f74b747c/TDD_using_Jest.PNG)

To successfully execute the app.test.js file, I installed Jest as the testing framework, along with necessary dependencies like jsdom for running the tests and set up the necessary testing environment, ensuring that Jest could simulate DOM interactions and validate the functionality of the success message.

Why TDD as an enhancement at a Later Stage?

While TDD is typically adopted early in the project, implementing it at a later stage allows us to ensure that we thoroughly understand the application’s requirements first. By adding tests after the initial functionality is in place, we can identify critical areas that require testing and apply more focused test coverage. This phased approach also helps in improving code quality, maintaining stable progress, and preventing future bugs, especially as new features and updates are added.

**Bug Ticket** (This is an imaginary bug ticket introduced solely to showcase how bug tickets are documented and addressed. In reality, the web app has no problems with image loading or submission. This ticket demonstrates the distinction in tracking bugs compared to feature enhancements or resolved issues)

[Bug Ticket](https://github.com/LS-Teja/NU-pothole-reporting-system/blob/27f70c73a5bb94718b1d12c1b00ff68aeacaa893/Bug_ticket.PNG)

This issue requires a thorough investigation into file handling and storage mechanisms, including assessing compatibility with various file types and sizes, so it has been parked for now.

You can view the updated project board [here](https://github.com/LS-Teja/NU-pothole-reporting-system/blob/1a091012b398053bc6415dd61f3bdd4df26dce45/ProjectBoardAtTheEnd.PNG)

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## User and Technical Documentation

### User Documentation:

The Pothole Reporting System allows users to submit reports about potholes, including their location and description, with an optional photo upload. Users fill out the required fields—Location and Description—then click the "Submit Report" button to send their information. Upon successful submission, a confirmation message is displayed. Note that photo uploads may experience intermittent issues.

### Technical Documentation:

The system is built with HTML, CSS, and JavaScript. HTML provides the structure for the form where users enter the location, description, and upload a photo. CSS styles the form for a clean, responsive layout. JavaScript handles form validation, ensures required fields are filled, and displays a success message upon form submission. The app uses Jest for testing key features, including form submission and message display. Known limitations include the lack of GIS mapping for precise location marking, and intermittent issues with photo uploads that are being prioritized for resolution.

### Contribution Guidelines
We welcome contributions to improve this project. To contribute:

1. Fork the repository.
2. Create a feature branch:
3. 
   `git checkout -b feature/your-feature-name`
   
5. Commit your changes and push to your forked repository.
6. Submit a pull request with a detailed description of your changes.

### License
This project is licensed under the MIT License. See the LICENSE file for details.

### Contact
For queries, suggestions, or feedback, feel free to reach out:

**Email:** l.sreeyapureddy@northeastern.com

**GitHub:** https://github.com/LS-Teja

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Evaluation Section

**Testing & Validation:**
The application has been tested thoroughly, using Jest for Test-Driven Development (TDD) to ensure the functionality of key features such as form submission and success message display. The validation tests confirm that required fields are correctly handled, and success messages appear as expected. Further testing is ongoing to ensure stability and performance.

**User Feedback:**
During Iteration 3 of the MVP, users have encountered issues with the image upload feature. Specifically, the file upload process intermittently fails, causing the system to freeze or not properly submit the image. This issue impacts the user experience and can lead to incomplete or inaccurate reports. The bug is being prioritized for resolution.

**Performance:**
The performance of the application is currently optimal. The interface loads quickly, and the form functions as expected. However, additional testing across various devices is necessary to ensure that it performs well on a wider range of screen sizes and browsers.

**Known Issues & Limitations:**
A major limitation is the inability to use GIS maps for users to pinpoint the exact location of potholes. This functionality will be important for future improvements. Additionally, the intermittent issue with image uploads needs to be addressed.

**Future Enhancements:**
Future plans include integrating GIS mapping to allow users to select exact locations, improving the image upload reliability, and refining the user interface for a more intuitive experience. These enhancements will address current limitations and further improve the system's usability.

This evaluation highlights the progress made and areas that require attention for future development.



