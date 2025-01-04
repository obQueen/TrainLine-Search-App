# Software Engineering Summative 1

For Northeastern University

## About

Author GitHub Username: @obQueen

# **Train Line Information Search Application**
The Train Line Information Search Application is designed to provide users with a seamless way to search for train lines and routes using flexible and advanced search criteria. By integrating features like wildcard searches and logical operators, the app ensures that users can quickly and efficiently find the information they need. Below are the key highlights and benefits of this application:

### Key Features
*  Search Functionality:
  *  Wildcard Support: Allows users to include * or % in their search to match any sequence of characters in line names or routes.
  *  Logical Operators: Enables users to combine search criteria with AND/OR logic for more refined results.
  *  Real-Time Updates: Incorporates live data from train schedules and disruption APIs to ensure up-to-date and accurate information.
*  Dynamic Results Display:
  *  Results are shown in a user-friendly table format, clearly listing train line names and their corresponding routes.
  *  Includes a "No Results Found" message for unmatched queries, ensuring clarity and user feedback.

<img width="814" alt="Fig: HomePage" src="https://github.com/user-attachments/assets/2ccddf9d-6ac6-43a1-8f5d-dfb6d9e7fc44" />

## **Reason for Creating the App**

Enhancing search capabilities for train line information addresses the shortcomings of current tools, which often lack flexibility and comprehensive functionality. This application provides a modern and intuitive solution to these challenges, offering the following benefits:
*  Improved Efficiency: By using advanced search capabilities and real-time data, users can access relevant train line information in seconds.
*  Increased Accuracy: With live updates from trusted APIs, the data is always current, eliminating outdated or incomplete results.
*  User-Friendly Design: By introducing a search function and organising train line data alphabetically (A-Z), the application offers a more intuitive and user-friendly experience. Users can easily navigate and locate specific information without scrolling through long, cumbersome tables, making the process faster and more efficient.

## Prototype Designs

<a href="https://www.figma.com/design/G9aLPGSuBS54DFH1SgEfN6/Web-Train-App?node-id=0-1&t=OQet3OBlkL3XRIQA-1"> Figma Prototype </a>

In my organisation, more than one project designs option go through the option selection review. Green is the best and orange is alternative. Any other option will be categorised as red. In the light of this, I  used Figma to create two design options. The design process involved creating interactive prototypes for each concept, allowing for a more realistic representation of the user experience. These prototypes simulated key functionalities such as the alphabet-based search and result display, providing a clearer vision of how users would interact with the application. While ideally, a user survey would have been conducted to gather quantitative feedback, the current busy period in train infrastructure management and timetabling necessitated a more expedient approach. Instead, I opted for a visual check with colleagues, for a quick response turnaround to make a timely decision. 






## Project Management
For the Train Line Information Search Application, an incremental linear approach was employed using GitHub Projects to streamline development and gradually add features to the prototype. This structured methodology involved upfront requirements gathering, incremental feature development, and rigorous testing of each component before progression. Visual task tracking through a Kanban board facilitated risk management and error detection, enabling quicker delivery of functional prototypes and simplified testing of smaller, manageable increments. The combination of structured workflows and iterative refinement ensured the effective and collaborative development of the application while maintaining flexibility for enhancements.

### Ticketing System
To capture and manage requirements for the Train Line Information Search Application, I utilised GitHub Issues and a comprehensive feature branching strategy within the project repository. Each requirement was documented as a separate issue with descriptive titles, detailed descriptions, and relevant labels for easy categorisation. I created dedicated feature branches for each new functionality or task, allowing for isolated development and testing. As work progressed, these branches were managed through pull requests, which facilitated code review and simulated would-be discussion before merging changes into the main branch.

The GitHub Projects Kanban board was used to visualise these issues and track their progress, with columns representing different stages of development (e.g., "To Do", "In Progress", and "Done"). When a feature was completed and tested, the corresponding pull request was created to merge the branch into the main branch. This approach enabled systematic requirement tracking, facilitated collaborative development, and provided a transparent view of the project's status.

By leveraging GitHub's issue tracking, feature branching, and pull request features, I could incrementally add and refine features to the prototype. This method ensured visibility into the project's scope and progress, supporting effective communication, development, and delivery of the Train Line Information Search Application.

![Image alt](https://github.com/obQueen/TrainLine-Search-App/blob/57393e50b2f69eb6e94f2a2060a046675692d49b/Kanban.png)


# Code and Design

## Technical Documentation

### Technical Stack
* [HMTL](https://devdocs.io/html/)
* [CSS](https://devdocs.io/css/)
* [JS](https://devdocs.io/javascript/)
* [JS](https://www.w3schools.com/js/)


### Code List for Application

* index.html: main html file for the application
* ContactUs.html: Contact Us page
* Search.html: Search Page 
* Styles.css: CSS file for styling
* Script.js: JavaScript file containing core functionality
* Search.js: Searches and displays train line information


### Files used in testing

* App Test.docx   //  for manual testing but uploaded here as .pdf 


### **User End Links**

* **Repo name: **
* **Repo link: **


**After cloning the project, No API key is required to run this application. The app fetches data from a public website (http://www.railwaycodes.org.uk/line/line_names.shtm) using a CORS proxy (https://api.allorigins.win) to bypass cross-origin restrictions.**

## Code Implementation

Below is a step-by-step guide on how I produced the Train Line Information Search Application MVP:

1. I created the main HTML files (index.html, contactUs.html, search.html) to structure the application's pages.

2. In the styles.css file, I implemented the styling for the application to ensure a user-friendly interface.

3. In the script.js file, I implemented the core functionality:
   - Created the createAlphabetButtons() function to generate clickable alphabet buttons for searching.
   - Implemented the fetchTrainLines() function to asynchronously retrieve train line data from an external source (railwaycodes.org.uk).
   - Developed the displayResults(letter) function to filter and display train lines based on the selected letter.

4. I used the Fetch API with the All Origins service to bypass CORS restrictions when fetching data from the external source.

5. Implemented error handling in the fetchTrainLines() and displayResults() functions to manage cases where data retrieval fails or no results are found.

6. Created a function to parse the HTML content received from the API and extract relevant train line information.

7. Implemented a tabular display for search results, showing line names and routes.

8. Added navigation functions (goBack() and goHome()) to improve user experience.

9. Finally, I called the createAlphabetButtons() function to initialize the application's search functionality.

## Code Style and Conventions

Throughout the development of the Train Line Information Search Application, I adhered to best coding practices to ensure maintainability and readability. In the JavaScript file (script.js), I consistently used camelCase naming conventions for variables and functions, enhancing code clarity. Proper indentation was maintained across all files (HTML, CSS, and JavaScript) to improve code structure and readability. To aid understanding, I included concise yet informative comments throughout the script.js file, explaining the purpose and functionality of key code blocks. For instance, the fetchTrainLines() function is accompanied by comments detailing the API call process and data parsing steps. This approach not only facilitates my own code management but also makes it easier for potential collaborators to understand and contribute to the project. Additionally, I structured the code into logical functions (e.g., createAlphabetButtons(), displayResults()) to promote modularity and ease of maintenance.

# ** Testing **

I conducted both manual user acceptance test and automated testing to ensure all functionalities worked as intended. Manual testing involved structured forms listing actions and expected results for validation. Automated unit testing, using Jest and jsdom, focused on key features like API integration and search functionality (api.test.js and search.test.js).

### Manual Testing Process

1. **Test Plan Creation**: I created a test plan that included specific actions associated with key functionalities of the application. Each action was paired with an expected outcome to provide clear criteria for evaluation.

2. **Testing Actions**: The following functionalities were tested:
   - **Application Launch**: Users ran `TIndex.html` in a browser (e.g., Chrome) to ensure the application loaded correctly.
   - **Contact Us Navigation**: Users clicked on the “Contact Us” menu to verify that it navigated correctly to the contact page.
   - **Search Navigation**: Users clicked on the “Search” menu to confirm proper navigation to the search functionality.
   - **Back Button Functionality**: Users clicked the “Back” button on both the “Contact Us” and “Search” pages to ensure it returned them to the previous page.
   - **Home Button Functionality**: Users clicked the “Home” button on both pages to verify that it refreshed the application as intended.
   - **Alphabet Button Filtering**: Users clicked any of the alphabet buttons to check if the application filtered train lines starting with the selected letter.
   - **Single Character Search**: Users searched using one character only (e.g., ‘A’) and clicked on the search button to verify that results displayed correctly.
   - **Special Character Search**: Users searched using at least one character combined with special characters (e.g., ‘A*’) in the Line Name input field and clicked on the search button.
   - **Combined Search Criteria**: Users searched using at least one character combined with * or % in both the Name input and Route fields while checking different “Search Type” options.

3. **User Feedback**: Participants in the testing process used a structured form to indicate whether each action passed or failed based on the expected results. This feedback provided valuable insights into the application's performance and usability.

4. **Issue Identification**: Any failures reported were documented, allowing for prompt investigation and resolution of issues.

### Results

The manual testing approach allowed for direct user interaction with the application, providing immediate feedback on functionality and user experience. This method ensured that any issues were identified early in the development process, leading to a more reliable and user-friendly Train Line Information Search Application.

By focusing on manual testing and user feedback, I was able to create an effective validation process that ensured all critical features met user expectations before deployment.

To evaluate and improve the quality of the web application, I used Google Lighthouse, an open-source tool designed to provide detailed insights into webpage performance. Lighthouse assesses four key areas: Performance, which examines loading speed and responsiveness; Accessibility, which considers how easily users with disabilities can navigate the site; Best Practices, which ensures compliance with current web development standards; and SEO (Search Engine Optimization), which analyses factors that enhance the site’s visibility in search engines.

![Manual User Acceptance Form](https://github.com/obQueen/TrainLine-Search-App/blob/862e4f051378a4d7a77dc63940d4c99df8fc5c96/Manual%20App%20Test.pdf)

### **Unit Testing **

Unit testing, defined as testing “the smallest functional unit of code” (AWS, 2024), was conducted for the "Train Line Information App" using Jest. Following an incremental lifecycle model, the tests ensured each feature, including the `performSearch` function, worked correctly before advancing to subsequent stages. This function, which filters train lines based on user input and updates the DOM, was tested for input validation, AND/OR search functionality, and cases with no matches.

The test suite utilised `jsdom` for DOM simulation, `beforeEach` for a clean test environment, and mock train line data to replicate real-world scenarios. API integration and search functionality were validated through `api.test.js`, `search.test.js`, and a `package.json` file. Commands such as `npx jest api.test.js` and `npx jest search.test.js` were executed to ensure functionality. Despite initial challenges installing Node.js on a restricted device, all tests passed, confirming reliability and supporting the development of programming skills.

[Unit Test and Result Screenshot](https://github.com/obQueen/TrainLine-Search-App/blob/ab1be7c08d2c541ca86431d6687ed5f9cbc5a1f6/Test_FetchTrainLines.png)

### ** Performance and Accessibility Testing **


### **Results**
The application achieved an outstanding performance score of 99, indicating exceptional optimization for fast loading times, which significantly enhances user experience and minimizes bounce rates. The accessibility score of 84 reflects a solid commitment to usability, ensuring that users of all abilities can navigate the site effectively. The design features contrasting colors and clear labels, promoting intuitive interaction.

The web application achieved impressive scores across key areas in the Lighthouse audit. With a perfect performance score of 100, the app demonstrates exceptional optimization for speed and responsiveness, significantly enhancing user experience. The accessibility score of 92 reflects substantial improvements over the original website, particularly in the use of contrasting colours. Unlike the original site, which may have posed challenges for users with colour blindness, this web app intentionally employs high-contrast colour schemes to improve readability and element identification for all users. The best practices rating of 96 indicates strong adherence to current web development standards, ensuring a robust and user-friendly interface. Lastly, the SEO score of 90 suggests that the application is well-structured for search engine visibility, potentially increasing organic traffic without relying heavily on paid advertising. These scores collectively represent a significant enhancement in both functionality and inclusivity compared to the original website.
