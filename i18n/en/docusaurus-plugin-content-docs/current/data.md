# Data

The Data section is used to connect, manage, and overview all data sources that the platform works with. This data forms the knowledge base from which the AI draws when answering user queries.

## Data Sources Overview

Upon entering the section, the user sees a table of all connected sources. The table contains the following columns:

- **#** – unique source ID
- **Name** – name of the file or connection
- **Type** – type of source (e.g., File or External API)
- **Created** – date the connection was created
- **Status** – current integration status (e.g., Interested)
- **Actions** – option to view or edit using icons (e.g., eye icon)

In the top right corner, there is a **New Data** button that launches the new data source connection wizard.

## New Data Connection Wizard

After clicking **New Data**, a three-step wizard opens, allowing you to connect a new data source in two ways:

### Selecting the Source Type
The user chooses whether to connect:

- **File** – upload a file from their own device (e.g., PDF, DOCX, TXT),
- **External API connection** – connect a data system via API (e.g., Google Drive, Confluence, company storage).

After selecting the type, continue by clicking the **Continue** button.

### File Upload Configuration (File)
If **File** is selected, a screen for uploading the document appears. The user:

- enters the connection name in the **Name** field,
- uploads the file by dragging or clicking into the designated area **Drop files here or click to upload**.

After filling in the details, continue by clicking **Continue**.

### API Connection Configuration (External API)
If the user selects **External API**, two values are entered:

- **Name** – name of the connection (e.g., "Siesta Intranet"),
- **API URL** – the API address from which the system will regularly fetch data.

After entering both values, continue by clicking **Continue**.

## Connecting Data to an Assistant

When creating or configuring an AI assistant, the user selects which connected data sources the assistant should use. This selection affects what information the assistant will use when answering queries. Within the assistant configuration, it is possible to combine multiple data sources or select only one specific source according to the intended use.

## Features and Behavior

- Added data sources are automatically displayed in the main overview.
- Each record can be viewed or edited using the buttons in the **Actions** column.
- If there is a connection error or invalid file format, the user is informed by an error message.

This section is key for Siesta AI to work with up-to-date and relevant data across different systems, without the need for manual updates. 