# Product Card - React Components

## Project Overview
This project demonstrates the creation of reusable React components by building a **Product Card**. The application will display a product's **name, price, description, and image** using individual components. Additionally, a personalized greeting will be displayed based on the user's first name.

## Instructions

### 1. Setup the Project
- Use **create-react-app** to initialize a new React project.
- Navigate to the `src` folder and create a new file called `App.js` to serve as the root component.

### 2. Create the Product Data File
- In the `src` folder, create a file named **`product.js`**.
- Define a JSON object that contains:
  - `name` (Product Name)
  - `price` (Product Price)
  - `description` (Product Description)
  - `image` (Path or URL to the product image)
- Export this JSON object for use in other components.

### 3. Create Product Components
Develop four separate components:
- **`Name.js`**: Displays the product name.
- **`Price.js`**: Displays the product price.
- **`Description.js`**: Displays the product description.
- **`Image.js`**: Displays the product image.

### 4. Import & Use Components in App.js
- Import all the components and the JSON object in **`App.js`**.
- Use the imported data to populate the components.

### 5. Create a Product Card
- Utilize **React-Bootstrap** to design a card layout that contains all product details.

### 6. Implement a Personalized Greeting
- Declare a variable for the first name above the root component.
- Below the product card, display a greeting:
  - If a first name is provided: `Hello, [First Name]!`
  - If no first name is provided: `Hello, there!`
- Show an image when the first name is provided.

### 7. Styling & Creativity
- Feel free to enhance the styling using **CSS** or other styling libraries.
- Make the product card visually appealing and user-friendly.

## Technologies Used
- **React.js**
- **React-Bootstrap** for UI components
- **CSS** for additional styling

## How to Run the Project
1. Clone the repository:
   ```sh
   git clone https://github.com/flavianokoth/product-card.git
   ```
2. Navigate to the project directory:
   ```sh
   cd product-card
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Screenshots
(Add screenshots of the product card UI here if needed.)

## Author
- **Flavian okoth**

## License
This project is licensed under the [MIT License](LICENSE).

