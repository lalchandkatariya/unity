export const degreeList = ["MCA", "BCA", "B.SC", "MA", "BE", "UG", "PG"];
export const companyList = [
  "google",
  "microsoft",
  "amazon",
  "twitter",
  "instagram",
  "facebook",
  "meta",
];

export const dateFormat = (date) => {
  //console.log('____date', date)
  let currentDate = new Date(date);

  let month = currentDate.getMonth() + 1;
  let day = currentDate.getDate();
  let year = currentDate.getFullYear();
  let formattedDate = `${year}-${month < 10 ? 0 : ""}${month}-${day}`;
  // console.log("formattedDate", formattedDate)
  return formattedDate;
};
