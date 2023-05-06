const pagetitle = (title = "") => {
  const siteTitle = "No Pressure";
  return [siteTitle, title].filter(Boolean).join(" | ");
};

export default pagetitle;
