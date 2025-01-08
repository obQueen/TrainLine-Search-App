 # Software Engineering Summative 1

For Northeastern University

## About

Author GitHub Username: @obQueen

# **Train Line Information Search Application**
The Train Line Information Search Application is designed to provide users with a seamless way to search for train lines and routes using flexible and advanced search criteria. By integrating features like wildcard searches and logical operators, the app ensures that users can quickly and efficiently find the information they need. Below are the key highlights and benefits of this application:

## Key Features
Search Functionality:
  *    Wildcard Support: Allows users to include * or % in their search to match any sequence of characters in line names or routes.
  *    Logical Operators: Enables users to combine search criteria with AND/OR logic for more refined results.
  *    Real-Time Updates: Incorporates live data from train schedules and disruption APIs to ensure up-to-date and accurate information.
    
Dynamic Results Display:
  *  Results are shown in a user-friendly table format, clearly listing train line names and their corresponding routes.
  *  Includes a "No Results Found" message for unmatched queries, ensuring clarity and user feedback.

<img width="814" alt="Fig: HomePage" src="https://github.com/user-attachments/assets/2ccddf9d-6ac6-43a1-8f5d-dfb6d9e7fc44" />

## **Reason for Creating the App**

Enhancing search capabilities for train line information addresses limitations in existing tools by providing a flexible, intuitive solution. The application improves efficiency with advanced search features and real-time data, ensures accuracy through live API updates, and offers a user-friendly design with alphabetically organised train line data for easy navigation and faster access.

## Prototype Designs

<a href="https://www.figma.com/design/G9aLPGSuBS54DFH1SgEfN6/Web-Train-App?node-id=0-1&t=OQet3OBlkL3XRIQA-1"> Figma Prototype </a>

In my organisation, project design options undergo an option selection review, where designs are categorised as green for the best choice, orange for alternatives, and red for non-viable options. Following this approach, I used Figma to create two interactive design prototypes. These prototypes simulated core functionalities, such as alphabet-based search and result display, offering a realistic representation of the user experience. Due to the busy period in train infrastructure management and timetabling, a user survey was not feasible. Instead, I conducted a visual review with colleagues to obtain swift feedback and make a timely decision. 

![User Interface Design Option Form](https://github.com/obQueen/TrainLine-Search-App/blob/5ed1750bbd7cf3112a4455360e1f72489db08c89/TrainLine-Design-Options.png "User Interface Design Option Form")

## Deployed Application
The project development, while not a full Continuous Integration (CI) pipeline, supports regular code integration via version control, consistent dependency management through npm, and automated testing for code validation. Built using Express.js for server-side functionality and Jest for unit testing, the train line information app was developed incrementally, with each component thoroughly tested after creation. This methodical approach contributed to the app's reliability and overall quality, reflecting best practices in software development.

*  [Live App](https://obqueen.github.io/TrainLine-Search-App/)

# User Documentation
In order to run this application:
1. Ensure Node.js and npm are installed or follow instruction on https://nodejs.org/en
  - node -v
  - npm -v

2. Clone Repository
  - git clone https://github.com/obQueen/TrainLine-Search-App.git
  
3. Navigate to the project directory

4. Install dependencies:
  - npm install --save-dev http-server
  
5. To Run the application:
  - npm start

6. To Run Test
  - npm test 

## Using The Application

#### Basic Search
* Enter a train line or route name in the search box.
* Click "Search" or press Enter.
* Results will appear below the search box.

#### Wildcard (*) Search
You can use '*' as a suffix, prefix or both. For example, \*Express\, City\*, or \*Central\*
 
#### Boolean Search
Select 'OR' for records meeting one criterion or 'AND' for records meeting all criteria. Combine with wildcard options for refined results. 

#### Reading Search Results
Results are displayed in a table with line name and route. If no matches are found, "No Results Found" appears.

#### Troubleshooting

* No Results Found : Check spelling, use wildcards, ensure internet connection
* Page Not Loading : Check connection, refresh the page, or clear browser cache

#### Feedback and Support
If you encounter any issues or have suggestions for improvement, please contact us page **[insert contact email/form here].**

# Project Management
For the Train Line Information Search Application, an incremental linear approach was employed using GitHub Projects to streamline development and gradually add features to the prototype. This structured methodology involved upfront requirements gathering, incremental feature development, and rigorous testing of each component before progression. Visual task tracking through a Kanban board facilitated risk management and error detection, enabling quicker delivery of functional prototypes and simplified testing of smaller, manageable increments. The combination of structured workflows and iterative refinement ensured the effective and collaborative development of the application while maintaining flexibility for enhancements.

# Ticketing System
To capture and manage requirements for the Train Line Information Search Application, I utilised GitHub Issues and a comprehensive feature branching strategy within the project repository. Each requirement was documented as a separate issue with descriptive titles, detailed descriptions, and relevant labels for easy categorisation. I created dedicated feature branches for each new functionality or task, allowing for isolated development and testing. As work progressed, these branches were managed through pull requests, which facilitated code review and simulated would-be discussion before merging changes into the main branch.

The GitHub Projects Kanban board was used to visualise these issues and track their progress, with columns representing different stages of development (e.g., "To Do", "In Progress", and "Done"). When a feature was completed and tested, the corresponding pull request was created to merge the branch into the main branch. This approach enabled systematic requirement tracking, facilitated collaborative development, and provided a transparent view of the project's status.

By leveraging GitHub's issue tracking, feature branching, and pull request features, I could incrementally add and refine features to the prototype. This method ensured visibility into the project's scope and progress, supporting effective communication, development, and delivery of the Train Line Information Search Application.

![Ticketing System](https://github.com/obQueen/TrainLine-Search-App/blob/57393e50b2f69eb6e94f2a2060a046675692d49b/Kanban.png "Ticketing System")


# Code and Design

## Technical Documentation

### Technical Stack
* [HMTL](https://devdocs.io/html/)
* [CSS](https://devdocs.io/css/)
* [JS](https://devdocs.io/javascript/)
* [JSON](https://gjs-docs.gnome.org/json10~1.0/)


### Code List for Application

* index.html
* ContactUs.html
* Search.html
* Styles.css
* Script.js
* Search.js


### Files used in testing

* App Test.docx   //  for manual testing but uploaded here as .pdf
* api.test.js
* search.test.js
* package.json


### **User End Links**

* Repo name: obQueen
* Repo link: https://github.com/obQueen/TrainLine-Search-App.git](https://github.com/obQueen/TrainLine-Search-App
* Data Source: http://www.railwaycodes.org.uk/line/line_names.shtm


**After cloning the project, No API key is required to run this application. The app fetches data from a public website (http://www.railwaycodes.org.uk/line/line_names.shtm) using a CORS proxy (https://api.allorigins.win) to bypass cross-origin restrictions.**

## Code Implementation

Steps to develop the Train Line Information Search Application MVP:

1. HTML: Created main pages (index.html, contactUs.html, search.html).

2. CSS: Styled the application for a user-friendly interface.

3. Java Script:
   - Developed createAlphabetButtons() to generate search buttons.
   - Used fetchTrainLines() with the Fetch API (via All Origins) to retrieve train line data(railwaycodes.org.uk) and handle CORS.
   - Implemented displayResults(letter) to filter and display search results.

4. Added error handling for data retrieval failures and "no results" cases.

5. Parsed fetched HTML data to extract train line details.

6. Displayed results in a table showing line names and routes.

7. Integrated navigation functions (`goBack()` and `goHome()`) for better UX.

8. Called `createAlphabetButtons()` to activate search functionality.

## Code Style and Conventions

Throughout the development of the Train Line Information Search Application, I adhered to best coding practices to ensure maintainability and readability. In script.js, I employed camelCase for variables and functions and maintained consistent indentation across HTML, CSS, and JavaScript files to enhance structure. Concise comments were added to explain key functions, such as fetchTrainLines(), detailing API calls and data parsing. This approach facilitates code management and collaboration. Additionally, organising the code into logical functions (e.g., createAlphabetButtons(), displayResults()) promotes modularity and ease of maintenance.

# **Testing**

I conducted both manual user acceptance test and automated testing to ensure all functionalities worked as intended. Manual testing involved structured forms listing actions and expected results for validation. Automated unit testing, using Jest and jsdom, focused on key features like API integration and search functionality (api.test.js and search.test.js).

## Manual Testing Process

1. **Test Plan Creation**: I created a test plan that included specific actions associated with key functionalities of the application. Each action was paired with an expected outcome to provide clear criteria for evaluation.

2. **Testing Actions**: The following functionalities were tested:
   - Application Launch: Users ran `TIndex.html` in a browser (e.g., Chrome) to ensure the application loaded correctly.
   - Contact Us Navigation: Users clicked on the “Contact Us” menu to verify that it navigated correctly to the contact page.
   - Search Navigation: Users clicked on the “Search” menu to confirm proper navigation to the search functionality.
   - Back Button Functionality: Users clicked the “Back” button on both the “Contact Us” and “Search” pages to ensure it returned them to the previous page.
   - Home Button Functionality: Users clicked the “Home” button on both pages to verify that it refreshed the application as intended.
   - Alphabet Button Filtering: Users clicked any of the alphabet buttons to check if the application filtered train lines starting with the selected letter.
   - Single Character Search: Users searched using one character only (e.g., ‘A’) and clicked on the search button to verify that results displayed correctly.
   - Special Character Search: Users searched using at least one character combined with special characters (e.g., ‘A*’) in the Line Name input field and clicked on the search button.
   - Combined Search Criteria**: Users searched using at least one character combined with * or % in both the Name input and Route fields while checking different “Search Type” options.

3. **User Feedback**: Participants in the testing process used a structured form to indicate whether each action passed or failed based on the expected results. This feedback provided valuable insights into the application's performance and usability.

4. **Issue Identification**: Any failures reported were documented, allowing for prompt investigation and resolution of issues.

## Results

The manual testing approach allowed for direct user interaction with the application, providing immediate feedback on functionality and user experience. This method ensured that any issues were identified early in the development process, leading to a more reliable and user-friendly Train Line Information Search Application.

By focusing on manual testing and user feedback, I was able to create an effective validation process that ensured all critical features met user expectations before deployment.

To evaluate and improve the quality of the web application, I used Google Lighthouse, an open-source tool designed to provide detailed insights into webpage performance. Lighthouse assesses four key areas: Performance, which examines loading speed and responsiveness; Accessibility, which considers how easily users with disabilities can navigate the site; Best Practices, which ensures compliance with current web development standards; and SEO (Search Engine Optimization), which analyses factors that enhance the site’s visibility in search engines.

![Manual User Acceptance Form](https://github.com/obQueen/TrainLine-Search-App/blob/862e4f051378a4d7a77dc63940d4c99df8fc5c96/Manual%20App%20Test.pdf)

## **Unit Testing**

Unit testing, defined as testing "the smallest functional unit of code" (AWS, 2024), was conducted for the "Train Line Information App" using Jest. Following an incremental lifecycle, tests validated each feature, including the `performSearch` function, before progressing. This function, which filters train lines and updates the DOM, was tested for input validation, AND/OR search functionality, and no-match scenarios.

The test suite used `jsdom` for DOM simulation, `beforeEach` for a clean environment, and mock data to simulate real-world conditions. API integration and search functionality were validated through `api.test.js`, `search.test.js`, and `package.json`. Despite initial challenges with Node.js installation on a restricted device, all tests passed, confirming reliability and supporting skill development.


![Unit Test and Result Screenshot](https://github.com/obQueen/TrainLine-Search-App/blob/ab1be7c08d2c541ca86431d6687ed5f9cbc5a1f6/Test_FetchTrainLines.png)
![Unit Test - Search](https://github.com/obQueen/TrainLine-Search-App/blob/92a10214552c2c876cbfbd20b7a3970dd420a49c/Unit%20Test%20-Search.png)


## **Performance and Accessibility Testing**
"Lighthouse is an open-source, automated tool for analysing a web page in order to help the developer improve such page(s). The metrics being analysed for this application are: performance, accessibility, best practice, and Search Engine Optimisation(SEO)"(Chrome, n.d) .

* Performance: Measure focuses on speed and responsiveness.
* Accessibility: Evaluates ease of use and interaction.
* Best Practices: Aggregate scores relating to industry standards and security.For example, use of https.
* SEO :  Evaluates webpage optimisation for search engine visibility and ranking.

![Home Page Lighthouse Test](https://github.com/obQueen/TrainLine-Search-App/blob/8248c8d0bfb4df47bc57d3689818a8c9aa4fe274/Lighthouse%20Home-Page.png)
![Search Page Lighthouse Test](https://github.com/obQueen/TrainLine-Search-App/blob/8248c8d0bfb4df47bc57d3689818a8c9aa4fe274/Lighthouse%20Search-Page.png)

The Lighthouse performance audit reveals consistent high scores across the train line information app's index (home) and search pages. Both pages achieved perfect scores of 100 in performance, indicating exceptional optimisation for speed and responsiveness. The accessibility score for the index page is 100, while the search page scored 92, suggesting minor areas for improvement in usability, particularly for users with disabilities. In terms of best practices, the index page scored 100, compared to the search page's score of 96, highlighting a need for slight enhancements in adherence to web development standards on the search page. Finally, both pages maintained an SEO score of 90, indicating effective search engine optimisation strategies. Overall, these results demonstrate strong functionality and inclusivity across both pages, with specific attention needed on the search page for accessibility and best practices.

# Design Evaluation
The Train Line Information Search Application effectively meets its purpose by providing users with a streamlined platform to locate train lines and routes. Its intuitive interface features clear navigation, well-structured search functionalities, and a dynamic results table, ensuring ease of use. Advanced features, such as wildcard support and logical operators (AND/OR), allow users to refine queries efficiently. Visual hierarchy, with appropriate spacing and clear labels, enhances readability while preventing information overload. The application achieves exceptional performance scores, with both the home and search pages scoring 100 in Lighthouse performance metrics, though minor accessibility improvements could further enhance inclusivity.

“Continuous Integration (CI) automates testing and integration of code changes into a shared repository, ensuring secure, high-quality builds while Continuous Delivery (CD) ensures a stable, production-ready codebase with seamless deployments to test and live environments” Merode (2023). Implementing CI and CD and addressing accessibility issues, such as screen reader support would enhance software quality, testing and  faster delivery of updates to meet evolving user needs.


# References
AWS(2024) What is unit testing? [Online]. Available at: https://aws.amazon.com/what-is/unit-testing/ (Accessed: 27 December, 2024)

Chrome(n.d) Introduction to lighthouse [Online]. Available at: https://developer.chrome.com/docs/lighthouse/overview (Accessed:05 January, 2025)

Mayer, D(2023) Currency Converter App [Online]. Available at: https://github.com/EDGENortheastern/dan-m-dec22.git (Accessed: 27 December, 2024)

Merode, H (2023) *Continuous Integration (CI) and Continuous Delivery (CD): A Practical Guide to Designing and Developing Pipelines* [PDF], Springer Nature. Available at: https://link-springer-com.ezproxy.neu.edu/book/10.1007/978-1-4842-9228-0 (Accessed:05 January, 2025)
