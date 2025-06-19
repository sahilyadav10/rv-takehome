# Project Overview

## Decisions

### 1. Validation Strategy

For forms, like the one to add and resign territories, I would've used react-form-hook but since I didn't get to it, i ended up using useState for the exisitng simple filters.

### 2. State Management

I've used basic react hooks since the scope currently wasn't complicated enough to warrant redux or context API.
If there was some global state like logged in user etc, I would've used context API

### 3. Frontend Architecture

- I've used Modular component architecture with clear separation so that app scales without a lot of refactoring
- I've create generic components like Modal, Navbar etc.
- I've grouped components together based on which dashboard they were a part of for easy maintainability and scalability.

### 4. AI

- AI was used to understand the market and what sort of metrics they would be needing to address some of the pain points.
- It was also used to generating the mock data and the intial components which were later refactored and improved.

## Future Considerations

1. **User Authentication**: Role-based access control and user management
2. **Data Export**: CSV/Excel export functionality
3. **Advanced Filtering**: Complex query building and saved filters
4. **Actionable Insights**: Insights on which regions is doing well and which is not and why
