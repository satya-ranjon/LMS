## Run the Project

### Prerequisites

Before running the project, ensure that you have the following prerequisites installed on your machine:

- [Node.js](https://nodejs.org/): Make sure you have Node.js installed, as it includes npm (Node Package Manager) which is used to manage project dependencies.

### Installation

1. Clone the repository to your local machine :

   ```bash
   git clone https://github.com/Lihan37/Resume-Craft.git
   ```

2. Run the project local machine :

   ```bash
   cd Resume-Craft
   npm install
   npm run dev

      or
   yarn install
   yarn run dev
   ```

## 1. Introduction

### 1.1 Purpose

The purpose of this document is to provide a detailed overview of the requirements for the development of a Key Learning Platform. The platform aims to facilitate the creation, sale, and management of courses, allowing users to engage in learning, collaborate with others, and access various educational resources.

### 1.2 Scope

The Key Learning Platform will allow users to:

- Create and sell courses
- Enroll in courses
- Manage courses, including the addition of team members with specific roles
- Structure courses into modules and milestones
- Provide downloadable content, including videos and attachments
- Discuss course modules through SMS
- Engage in webinars
- Access a personalized dashboard with course information, schedules, and a chat feature

## 2. System Overview

### 2.1 System Description

The Key Learning Platform is a web-based application that enables users to participate in online learning. It includes functionalities for course creation, enrollment, content management, discussion forums, webinars, and user dashboards.

### 2.2 Key Features

#### 2.2.1 Course Management

- User login and registration
- Course creation and sale
- Team management for course creators
- Assignment of roles with specific permissions

#### 2.2.2 Course Structure

- Division of courses into modules and milestones
- Tax assignment for each course
- Time-based access control for various course features

#### 2.2.3 Module Structure

- Module name, description, and attachment link
- Video and attachment download options within modules
- Task creation and download within modules

#### 2.2.4 User Interface

- Homepage with navigation, hero section, login button
- Dashboard for logged-in users
- Course category suggestions on the homepage
- List of free courses with subscription options
- Top lecturer listing
- Review and FAQ sections
- Footer with essential links

#### 2.2.5 Discussion Forum

- Discussion option under each module
- Posting and answering questions in the discussion forum

#### 2.2.6 User Dashboard

- Course purchase history
- Calendar for upcoming module schedules
- Chat page for interactions with other students, instructors, and course participants
- Favorite option for saving videos

#### 2.2.7 Webinars

- Webinar section with upcoming and past webinars
- Ability to participate in webinars

## 3. System Requirements

### 3.1 Functional Requirements

#### 3.1.1 User Authentication

- Users must be able to register, log in, and log out.

#### 3.1.2 Course Management

- Course creators should be able to create, manage, and sell courses.
- Team members can be added to assist in course management.

#### 3.1.3 Course Structure

- Courses should be divided into modules and milestones.
- Taxes and time-based access control must be configurable for each course.

#### 3.1.4 Module Structure

- Modules must have a name, description, attachment link, video, and downloadable content.
- Tasks within modules should have a name, description, and download link.

#### 3.1.5 User Interface

- Navigation bar on the homepage with login and dashboard buttons.
- Language selection option in the navigation bar.

#### 3.1.6 Discussion Forum

- Users should be able to discuss course modules through SMS.
- Discussion posts should be visible in the course creator's dashboard.

#### 3.1.7 User Dashboard

- Display of purchased courses, modules, and tasks.
- Calendar for upcoming module schedules.
- Chat page for communication with other users and instructors.

#### 3.1.8 Webinars

- Display of upcoming and past webinars.
- Ability to participate in webinars.

### 3.2 Non-functional Requirements

#### 3.2.1 Performance

- The platform should handle concurrent user interactions efficiently.
- Webinars should support a large number of participants.

#### 3.2.2 Security

- User authentication and data transmission must be secure.
- Course content should be protected from unauthorized access.

#### 3.2.3 Usability

- The user interface should be intuitive and user-friendly.
- Language selection should cater to a diverse user base.

#### 3.2.4 Reliability

- The platform should be available and reliable during peak usage times.

## 4. User Scenarios

### 4.1 User Registration and Course Enrollment

1. User registers on the platform.
2. User logs in and explores course categories on the homepage.
3. User enrolls in a course of interest, either free or through subscription.

### 4.2 Course Creation and Management

1. Course creator logs in and creates a new course.
2. Team members are added with specific roles to manage the course.

### 4.3 Module Exploration and Discussion

1. User logs in and accesses the dashboard.
2. User explores purchased courses and clicks on a module.
3. User engages in SMS-based discussion under the module.

### 4.4 Webinar Participation

1. User logs in and checks the upcoming webinars in the dashboard.
2. User participates in a live webinar or accesses recorded webinars.

### 4.5 Task Submission and Evaluation

1. User completes tasks within a module.
2. Tasks are submitted and visible in the course creator's dashboard.
3. Course creator reviews and evaluates submitted tasks.

## 5. Constraints

- The platform should comply with data protection and privacy regulations.
- Browser compatibility should be ensured for a wide range of devices.

## 6. Assumptions and Dependencies

- Users have a stable internet connection for accessing the platform.
- Courses and webinars will be created and managed by qualified instructors.

## 7. Conclusion

This Software Requirements Specification outlines the features, functionalities, and constraints of the Key Learning Platform. The successful implementation of these requirements will result in a robust online learning platform that caters to the needs of both course creators and learners.
