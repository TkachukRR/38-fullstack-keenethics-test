# **Review**:

This repository contains the source code of the admin panel created for a company providing bicycle rental services. The system includes both a backend, using Express for the REST API, and a frontend, utilizing React for the user interface. The backend utilizes MongoDB as the database to store and manage bicycle data.

## Functionality:

### **Bicycle Management:**

Users can add bicycles with the following fields: ID, name, type, color, wheel size, price, description.
Added bicycles are displayed in the list.
Users can change the status of a bicycle (available/busy/unavailable).
Users can remove a bicycle.
Statistics:

Users can view statistics on bicycles, including the total number, available bicycles, booked bicycles, and the average price.

### **General Requirements:**

Form data validation:
- Minimum length of 5 characters for all text fields.
- Accept only numerical input for numerical fields.
- All fields are required.
- Unique Bike IDs.

### **Solution Requirements:**

#### Backend (Express and MongoDB):

REST API for storing and managing bicycle data.
Calculation of statistics.

**[LINK: Backend Part Description](/backend/README.md)**

#### Frontend (React):

Use of REST API for seamless interaction.
Reactive updates of components.

**[LINK: Frontend Part Description](/frontend-react/README.md)**

## **Getting Started:**

1. Clone the repository git clone.
2. Install dependencies from the backend folder npm install.
3. Install dependencies from the frontend folder npm install.
4. Configure MongoDB:
   - Create a cluster.
   - In the root of the backend directory, create a file .env.
   - Add PORT=5000 to the .env file.
   - Add MONGODB_CLUSTER=mongodb+srv://___:ruDpwT1Qew6M6kh4@___.kvgcdzq.mongodb.net/___?retryWrites=true&w=majority to the .env file, replacing it with your MongoDB details.
5. Run the backend server from the backend folder npm dev.
6. Run the frontend server from the frontend folder npm start.
7. Open a browser and go to http://localhost:3000.
