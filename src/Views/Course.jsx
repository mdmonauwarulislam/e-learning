
import CoursePageCard from "../Components/CoursePageCard";
import learningImage from "../assets/Image/learning.jpg";

function Course() {
  const courses = [
    {
      title: "Web Design Fundamentals",
      description: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
      images: [learningImage, learningImage, learningImage],
      tags: ["4 Weeks", "Beginner"],
      author: "John Smith",
      curriculum: [
        { id: 1, title: "Introduction to HTML" },
        { id: 2, title: "Styling with CSS" },
        { id: 3, title: "Introduction to Responsive Design" },
        { id: 4, title: "Design Principles for Web" },
        { id: 5, title: "Building a Basic Website" },
      ],
    },
    {
      title: "JavaScript Essentials",
      description: "Master the basics of JavaScript, the programming language of the web. Learn about variables, functions, loops, and events.",
      images: [learningImage, learningImage, learningImage],
      tags: ["6 Weeks", "Intermediate"],
      author: "Jane Doe",
      curriculum: [
        { id: 1, title: "Introduction to JavaScript" },
        { id: 2, title: "Variables and Data Types" },
        { id: 3, title: "Functions and Scope" },
        { id: 4, title: "Loops and Iteration" },
        { id: 5, title: "Events and DOM Manipulation" },
      ],
    },
    {
      title: "React Basics",
      description: "Get started with React, a popular JavaScript library for building user interfaces. Understand components, state, and props.",
      images: [learningImage, learningImage, learningImage],
      tags: ["8 Weeks", "Advanced"],
      author: "Alice Johnson",
      curriculum: [
        { id: 1, title: "Introduction to React" },
        { id: 2, title: "Components and Props" },
        { id: 3, title: "State and Lifecycle" },
        { id: 4, title: "Handling Events" },
        { id: 5, title: "Conditional Rendering" },
      ],
    },
    {
      title: "CSS Flexbox and Grid",
      description: "Learn how to use CSS Flexbox and Grid to create complex and responsive web layouts with ease.",
      images: [learningImage, learningImage, learningImage],
      tags: ["5 Weeks", "Intermediate"],
      author: "Bob Brown",
      curriculum: [
        { id: 1, title: "Introduction to Flexbox" },
        { id: 2, title: "Flexbox Properties" },
        { id: 3, title: "Building Layouts with Flexbox" },
        { id: 4, title: "Introduction to CSS Grid" },
        { id: 5, title: "Building Layouts with Grid" },
      ],
    },
  ];
  return (
    <div className="pt-16 bg-grayBg pb-4 font-be-vietnam-pro ">
      <div className="md:flex justify-between items-center max-w-[1280px] xl:mx-auto mx-4 pb-12">
        <div className="md:w-1/2 text-[28px] md:text-[38px] xl:text-[48px] font-semibold md:pr-4 text-grayH">
            <h3>
            Online Courses on Design and Development
            </h3>
        </div>
        <div className="md:w-1/2 text-[14px] md:text-[16px] xl:text-[18px] text-grayPara md:inline md:py-4 md:pl-4 mt-2 md:mt-0 text-justify">
        Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey.
        </div>
      </div>
      <div className="border border-gray-200 mx-auto max-w-[1450px]"></div>
      <div >
      <div className="gap-8">
        {courses.map((course, index) => (
          <CoursePageCard key={index} course={course} />
        ))}
      </div>
      </div>
    </div>
  );
}

export default Course;
