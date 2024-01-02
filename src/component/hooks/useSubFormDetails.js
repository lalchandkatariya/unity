// import React, { useState } from 'react'

// const useSubFormDetails = ({data, modal}) => {
    
//     const [degree, setDegree] = useState(data?.educationDetails?.degree || '')
//     const [college, setCollege] = useState(data?.educationDetails?.college || '')
//     const [startCollegeYear, setStartCollegeYear] = useState(data?.educationDetails?.startYear || '')
//     const [endCollegeYear, setEndCollegeYear] = useState(data?.educationDetails?.endYear || '')
//     const [companyName, setCompanyName] = useState(data?.experienceDetails?.company || '')
//     const [startCompanyYear, setStartCompanyYear] = useState(data?.experienceDetails?.startYear || '')
//     const [endCompanyYear, setEndCompanyYear] = useState(data?.experienceDetails?.endYear || '')
//     const [option, setOption] = useState(modal === 'education' ? data?.educationDetails?.degree : data?.experienceDetails?.company || '')
  
//     return {degree, setDegree, college, setCollege, startCollegeYear, setStartCollegeYear, 
//         endCollegeYear, setEndCollegeYear, companyName, setCompanyName, startCompanyYear, 
//         setStartCompanyYear, endCompanyYear, setEndCompanyYear, option, setOption}
// }

// export default useSubFormDetails