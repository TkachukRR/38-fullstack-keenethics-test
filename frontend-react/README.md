# **Frontend Part Description:**

The frontend application is constructed using React, offering users a user-friendly and instinctive interface to manage bicycle lists.

1. #### Project Structure:

- The project adheres to a component-based structure, ensuring segregation, reusability, and code modularity.

2. #### Extraction into Separate Files:

- URL Request Addresses:

  - Addresses for URL requests are organized and stored in separate files for better maintainability.
  Utility Validators:

- Utility functions responsible for data validation are extracted into dedicated files, promoting code organization and clarity.
Styling:

    - Variables within the index.css file are utilized to manage font styles and color schemes.

3. #### Form Data Validation:

- Blocking Form Submission:

    - The form submission button is disabled when there are invalid fields, indicated by a change in the button color.

- Dynamic Output State:

  - The state of the output is dynamically updated onBlur if it contains invalid data, ensuring real-time feedback.
- 
- Input Types Usage:

  - Input types are appropriately used to facilitate correct data input and enhance user experience.
  
- Data Validation and ID Uniqueness:

  - Data entered into forms undergo validation checks, including the enforcement of a minimum length of 5 characters for text fields and the acceptance of only numerical input for numeric fields. Additionally, the system ensures the uniqueness of Bike IDs.

4. #### Improving UX/UI:

- Notification Popup Component:

    - A notification popup component is introduced, utilizing the <dialog> element to communicate interactions with the database. The component's input property consists of fields such as message, type (success/error), and duration, allowing customizable notification parameters.
- Skeleton Component:

    - A skeleton component is implemented to present fields containing data from the backend gracefully while the data is in the loading phase. This enhances the user experience by providing visual feedback during data retrieval.
