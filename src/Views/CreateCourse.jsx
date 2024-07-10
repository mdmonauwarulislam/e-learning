import { useState } from 'react';
import axios from 'axios';
import API from "../../env"

const CourseForm = () => {
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    weekDuration:'',
    courseLevel :'',
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
    console.log(formData);
    try {
      // Send formData to backend API using Axios
      const response = await axios.post(`${API}/course`, formData, {
        headers:{
          Authorization:localStorage.getItem("token")
        }
      });
      console.log('Course created:', response.data);

      // Reset form after successful submission
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

      // Handle success notification or redirection
    } catch (error) {
      console.error('Error creating course:', error);
      // Handle error notification or user feedback
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
        {/* weekduration */}
        <div className="mb-4">
          <label htmlFor="weekDuartion" className="block text-sm font-medium text-gray-700">Week Duartion</label>
          <input type="text" id="weekDuration" name="weekDuration" value={formData.weekDuration} onChange={handleChange} required className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        {/* courseLevel */}
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
                    <label htmlFor={`lessonDuration_${index}_${lessonIndex}`} className="block text-sm font-medium text-gray-700">Lesson Duration</label>
                    <input type="text" id={`lessonDuration_${index}_${lessonIndex}`} name="lessonDuration" value={lesson.lessonDuration} onChange={(e) => handleLessonChange(index, lessonIndex, e)} required className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  </div>
                  <div className="mb-2">
                    <label htmlFor={`lessonVideoUrl_${index}_${lessonIndex}`} className="block text-sm font-medium text-gray-700">Lesson Video URL</label>
                    <input type="text" id={`lessonVideoUrl_${index}_${lessonIndex}`} name="lessonVideoUrl" value={lesson.lessonVideoUrl} onChange={(e) => handleLessonChange(index, lessonIndex, e)} required className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  </div>
                  <div className="flex items-center">
                    <button type="button" className="text-red-600 hover:text-red-800 focus:outline-none" onClick={() => deleteCourseLesson(index, lessonIndex)}>Delete Lesson</button>
                  </div>
                </div>
              </div>
            ))}

            {/* Add Course Lesson Button */}
            <div className="mb-4">
              <button type="button" className="px-4 py-2 text-white transition-colors bg-blue-500 rounded-md hover:bg-blue-600" onClick={() => addCourseLesson(index)}>Add Lesson</button>
            </div>

            {/* Delete Sub Course Button */}
            <div className="flex items-center">
              <button type="button" className="text-red-600 hover:text-red-800 focus:outline-none" onClick={() => deleteSubCourse(index)}>Delete Sub Course</button>
            </div>
          </div>
        ))}

        {/* Add Sub Course Button */}
        <div className="mb-4">
          <button type="button" className="px-4 py-2 text-white transition-colors bg-blue-500 rounded-md hover:bg-blue-600" onClick={addSubCourse}>Add Sub Course</button>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button type="submit" className="px-4 py-2 text-white transition-colors bg-green-500 rounded-md hover:bg-green-600">Create Course</button>
        </div>
      </form>
    </div>
  );
};

export default CourseForm;
