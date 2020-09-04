import React from 'react';
import {Container } from './Courses.styled';
import { useGetCoursesQuery } from 'generated/graphql';

const Courses = () => {
  const {data, error, loading} = useGetCoursesQuery();

  if (error){
    return <div>unauthorized</div>;
  }
  if(loading) return <div>loading...</div>
  if(!data) return null;
  
  return(
    <Container>
      <ul>
        {data.courses.map((course, index) => {
          return <li key={index}>{course.courseName}</li>
        })}
      </ul>
      
    </Container>
  );
}

export default Courses;