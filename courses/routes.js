import Database from "../Database/index.js";

function CourseRoutes(app) {
    app.get("/api/courses", (req, res) => {
        const courses = Database.courses;
        res.send(courses);
    });

    app.post("/api/courses", (req, res) => {
        const course = {
            ...req.body,
            _id: new Date().getTime().toString()
        };
        
        console.log(course)
        Database.courses.push(course);
        res.send(course);
    });


}
export default CourseRoutes;
