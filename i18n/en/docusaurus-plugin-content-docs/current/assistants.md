# Assistants

The Assistants section is used to create and manage your own AI assistants, who respond to users within a defined context and according to preset behavior. Each assistant is a separately defined entity that can have its own data access, different communication style, and use a different model.

## List of Assistants

The main overview displays a list of all existing assistants. The table contains the following columns:

- **#** – unique assistant identifier
- **Name** – name of the assistant (e.g., ESG Assistant, HR Assistant)
- **Instructions** – a short preview of the instructions that define the assistant's behavior
- **Temperature** – parameter determining the creativity of responses
- **Status** – current status (e.g., Active, Deactivate)
- **Actions** – options to view, edit, or share the assistant (create a public link)

A new assistant can be created by clicking the **Create Assistant** button.

## Creating an Assistant

After clicking the button to create, a configuration form opens where you set the key properties of the assistant:

### Details
- **Name** – the name under which the assistant will be listed in the system
- **Instructions** – the main part of the prompt that defines how the assistant should behave (e.g., who they are, how to respond, what tone to use, what to specialize in)

### Model Selection
The user selects the specific language model the assistant will use (e.g., GPT-4o). The model selection can affect how the assistant responds – e.g., speed, accuracy, or ability to work with context.

### Data Access
When setting up the assistant, you can choose which data sources it should use. This way, each assistant can be assigned a different context according to its purpose:

- **Access to all data sources** – access to all connected data
- **Limited data sources access** – option to select only specific sources (e.g., HR documents, Intranet, Financial reports)

### Model Configuration
You can further adjust the model's behavior using the following parameters:

- **Response format** – output format of the response (e.g., text)
- **Temperature** – the higher the value, the more creative and less predictable the responses
- **Top P** – affects the diversity of word choice in the response (low value = more conservative answers)

### Public Chat
It is possible to activate the public chat mode, which allows the assistant to be easily deployed on a website or intranet. After activation, a simple JavaScript code is generated, which can be copied and pasted into a web page to integrate the assistant widget.

After filling in all fields, click the **Submit** button to save and make the new assistant available in the system. 