import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {
        const params = useParams()
        console.log(params.courseId);
        return (
                <div>
                        {params.courseId} Detail Page
                </div>
        )
}

export default CourseDetails