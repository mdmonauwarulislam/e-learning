import { useState } from 'react';
import axios from 'axios';
import API from "../../env";

const CourseForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    weekDuration: '',
    courseLevel: '',
    subCourse: [{
      part: '',
      title: '',
      courseLesson: [{
        lessonTitle: '',
        lessonNumber: '',
        lessonDuration: '',
        lessonVideoUrl: '',
      }],
    }],
    createdBy: '', // Assuming this will be handled based on logged-in user
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubCourseChange = (index, e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      subCourse: prevState.subCourse.map((item, i) =>
        i === index ? { ...item, [name]: value } : item
      ),
    }));
  };

  const handleLessonChange = (subCourseIndex, lessonIndex, e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      subCourse: prevState.subCourse.map((item, i) =>
        i === subCourseIndex ? {
          ...item,
          courseLesson: item.courseLesson.map((lesson, j) =>
            j === lessonIndex ? { ...lesson, [name]: value } : lesson
          ),
        } : item
      ),
    }));
  };

  const addSubCourse = () => {
    setFormData(prevState => ({
      ...prevState,
      subCourse: [...prevState.subCourse, {
        part: '',
        title: '',
        courseLesson: [{
          lessonTitle: '',
          lessonNumber: '',
          lessonDuration: '',
          lessonVideoUrl: '',
        }],
      }],
    }));
  };

  const deleteSubCourse = (index) => {
    setFormData(prevState => ({
      ...prevState,
      subCourse: prevState.subCourse.filter((_, i) => i !== index),
    }));
  };

  const addCourseLesson = (subCourseIndex) => {
    setFormData(prevState => ({
      ...prevState,
      subCourse: prevState.subCourse.map((item, index) =>
        index === subCourseIndex ? {
          ...item,
          courseLesson: [...item.courseLesson, {
            lessonTitle: '',
            lessonNumber: '',
            lessonDuration: '',
            lessonVideoUrl: '',
          }],
        } : item
      ),
    }));
  };

  const deleteCourseLesson = (subCourseIndex, lessonIndex) => {
    setFormData(prevState => ({
      ...prevState,
      subCourse: prevState.subCourse.map((item, index) =>
        index === subCourseIndex ? {
          ...item,
          courseLesson: item.courseLesson.filter((_, i) => i !== lessonIndex),
        } : item
      ),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API}/course`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      console.log('Course created:', response.data);

      setFormData({
        title: '',
        description: '',
        weekDuration: '',
        courseLevel: '',
        subCourse: [{
          part: '',
          title: '',
          courseLesson: [{
            lessonTitle: '',
            lessonNumber: '',
            lessonDuration: '',
            lessonVideoUrl: '',
          }],
        }],
        createdBy: '',
      });
    } catch (error) {
      console.error('Error creating course:', error);
    }
  };

  return (
    <div className="max-w-3xl p-6 mx-auto mt-6 bg-white rounded-md shadow-md">
      <h2 className="mb-4 text-2xl font-bold">Create Course</h2>
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} required rows="3" className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm resize-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
        </div>

        {/* Week Duration */}
        <div className="mb-4">
          <label htmlFor="weekDuration" className="block text-sm font-medium text-gray-700">Week Duration</label>
          <input type="text" id="weekDuration" name="weekDuration" value={formData.weekDuration} onChange={handleChange} required className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>

        {/* Course Level */}
        <div className="mb-4">
          <label htmlFor="courseLevel" className="block text-sm font-medium text-gray-700">Course Level</label>
          <input type="text" id="courseLevel" name="courseLevel" value={formData.courseLevel} onChange={handleChange} required className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>

        {/* Sub Courses */}
        {formData.subCourse.map((subCourse, index) => (
          <div key={index} className="mb-4">
            <h3 className="mb-2 text-lg font-semibold">Sub Course {index + 1}</h3>
            <div className="mb-2">
              <label htmlFor={`part_${index}`} className="block text-sm font-medium text-gray-700">Part</label>
              <input type="text" id={`part_${index}`} name="part" value={subCourse.part} onChange={(e) => handleSubCourseChange(index, e)} required className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor={`title_${index}`} className="block text-sm font-medium text-gray-700">Title</label>
              <input type="text" id={`title_${index}`} name="title" value={subCourse.title} onChange={(e) => handleSubCourseChange(index, e)} required className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>

            {/* Course Lessons */}
            {subCourse.courseLesson.map((lesson, lessonIndex) => (
              <div key={lessonIndex} className="mb-4">
                <h4 className="mb-2 font-semibold text-md">Lesson {lessonIndex + 1}</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="mb-2">
                    <label htmlFor={`lessonTitle_${index}_${lessonIndex}`} className="block text-sm font-medium text-gray-700">Lesson Title</label>
                    <input type="text" id={`lessonTitle_${index}_${lessonIndex}`} name="lessonTitle" value={lesson.lessonTitle} onChange={(e) => handleLessonChange(index, lessonIndex, e)} required className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  </div>
                  <div className="mb-2">
                    <label htmlFor={`lessonNumber_${index}_${lessonIndex}`} className="block text-sm font-medium text-gray-700">Lesson Number</label>
                    <input type="text" id={`lessonNumber_${index}_${lessonIndex}`} name="lessonNumber" value={lesson.lessonNumber} onChange={(e) => handleLessonChange(index, lessonIndex, e)} required className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  </div>
                  <div className="mb-2">
                    <label htmlFor={`lessonDuration_${index}_${lessonIndex}`} className="block text-sm font-medium text-gray-700">Lesson Duration (in minutes)</label>
                    <input type="number" id={`lessonDuration_${index}_${lessonIndex}`} name="lessonDuration" value={lesson.lessonDuration} onChange={(e) => handleLessonChange(index, lessonIndex, e)} required className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  </div>
                  <div className="mb-2">
                    <label htmlFor={`lessonVideoUrl_${index}_${lessonIndex}`} className="block text-sm font-medium text-gray-700">Lesson Video URL</label>
                    <input type="text" id={`lessonVideoUrl_${index}_${lessonIndex}`} name="lessonVideoUrl" value={lesson.lessonVideoUrl} onChange={(e) => handleLessonChange(index, lessonIndex, e)} required className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  </div>
                </div>
                <button type="button" onClick={() => deleteCourseLesson(index, lessonIndex)} className="text-red-500 hover:text-red-700 mt-2">Remove Lesson</button>
              </div>
            ))}
            <button type="button" onClick={() => addCourseLesson(index)} className="text-blue-500 hover:text-blue-700 mt-2">Add Lesson</button>
            <button type="button" onClick={() => deleteSubCourse(index)} className="text-red-500 hover:text-red-700 mt-2">Remove Sub Course</button>
          </div>
        ))}
        <button type="button" onClick={addSubCourse} className="text-blue-500 hover:text-blue-700 mb-4">Add Sub Course</button>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
};

export default CourseForm;
