const PreviewPage = require("../pageobjects/preview.page");
const SignUpPage = require("../pageobjects/singUp.page");

describe('Preview Test Cases - Public Site', () => {
    it('CK-146:Preview page has a course preview', async () => {
        await PreviewPage.open("PreviewPageUrl");
        await expect(PreviewPage.coursePreview).toHaveTextContaining("This is only a preview of the course. Although it includes all course content, it will not grade responses or provide feedback to students. To use the course with your students, click here to request an instructor account.");
        await PreviewPage.goToCoursePreviewClickHere();
        await expect(SignUpPage.signUpTitle).toHaveTitle("CourseKata - Request an Instructor Login");
    });
    it('CK-147:Preview page has a course outline', async () => {
        await PreviewPage.open("PreviewPageUrl");
        await PreviewPage.goToGettingStartedStudentSurveyLesson();
        await expect(PreviewPage.previewTitle).toHaveTitle("CourseKata - Student Survey (Part 1, REQUIRED)");
        await PreviewPage.goToLessonMenu();
        await expect(PreviewPage.courseOutlineTitle.toHaveTitle("Course Outline"))
        await expect(PreviewPage.btnLessonMenuOk.click())
    });
    it('CK-148:Preview page has a Learnosity Activity in the same page', async id => {
        await PreviewPage.open("PreviewPageUrl")
        await PreviewPage.goToLesson(PreviewPage.linkToLesson_1_6)
        await expect(PreviewPage.lessonTitle).toHaveTitle("CourseKata - 1.6 Chapter 1 Practice Quiz")
        await browser.switchToFrame(await PreviewPage.goToQuestionFrame("Ch1_Practice_Quiz"))
        await expect(PreviewPage.learnosityQuestion).toBeDisplayed()
        await expect(PreviewPage.learnosityQuestion).toHaveText("Learnosity: Ch1_Practice_Quiz")
    });
    it('CK-149:Preview page has a Learnosity Activity in sections', async () => {
        await PreviewPage.open("PreviewPageUrl");
        await PreviewPage.goToLesson(PreviewPage.linkToLesson_2_3)
        await expect(PreviewPage.lessonTitle).toHaveTitle("CourseKata - 2.3 Measurement");
        await browser.switchToFrame(await PreviewPage.goToQuestionFrame("Ch2_Measurement_1"))
        await expect(PreviewPage.learnosityQuestion).toBeDisplayed()
        await expect(PreviewPage.learnosityQuestion).toHaveText("Learnosity: Ch2_Measurement_1")
    });
    it('CK-150:Preview page has a Learnosity Activity with feedback', async () => {
        await PreviewPage.open("PreviewPageUrl");
        await PreviewPage.goToLesson(PreviewPage.linkToLesson_2_4)
        await expect(PreviewPage.lessonTitle).toHaveTitle("CourseKata - 2.4 Measurement (Continued)");
        await browser.switchToFrame(await PreviewPage.goToQuestionFrame("Ch2_Measurement_9"))
        await expect(PreviewPage.learnosityQuestion).toBeDisplayed()
        await expect(PreviewPage.learnosityQuestion).toHaveText("Learnosity: Ch2_Measurement_9")
    });
    it('CK-151:Preview page has a Learnosity Activity with points', async () => {
        await PreviewPage.open("PreviewPageUrl");
        await PreviewPage.goToLesson(PreviewPage.linkToLesson_3_0)
        await expect(PreviewPage.lessonTitle).toHaveTitle("CourseKata - 3.0 The Concept of Distribution");
        await browser.switchToFrame(await PreviewPage.goToQuestionFrame("Ch3_Concept_1"))
        await expect(PreviewPage.learnosityQuestion).toBeDisplayed()
        await expect(PreviewPage.learnosityQuestion).toHaveText("Learnosity: Ch3_Concept_1")
    });
    it('CK-152:Preview page has a Learnosity questions', async () => {
        await PreviewPage.open("PreviewPageUrl");
        await PreviewPage.goToLesson(PreviewPage.linkToLesson_2_10)
        await expect(PreviewPage.lessonTitle).toHaveTitle("CourseKata - 2.10 Chapter 2 Practice Quiz");
        await browser.switchToFrame(await PreviewPage.goToQuestionFrame("Ch2_Practice_Quiz"))
        await expect(PreviewPage.learnosityQuestion).toBeDisplayed()
        await expect(PreviewPage.learnosityQuestion).toHaveText("Learnosity: Ch2_Practice_Quiz")
    });
    it('CK-153:Preview page has a Learnosity open questions', async () => {
        await PreviewPage.open("PreviewPageUrl");
        await PreviewPage.goToLesson(PreviewPage.linkToLesson_2_2)
        await expect(PreviewPage.lessonTitle).toHaveTitle("CourseKata - 2.2 A Data Frame Example: MindsetMatters");
        await browser.switchToFrame(await PreviewPage.goToQuestionFrame("Ch2_FromNumbers_4"))
        await expect(PreviewPage.learnosityQuestion).toBeDisplayed()
        await expect(PreviewPage.learnosityQuestion).toHaveText("Learnosity: Ch2_FromNumbers_4")
    });
    it('CK-154:Preview page has a Datacamp questions', async () => {
        await PreviewPage.open("PreviewPageUrl");
        await PreviewPage.goToLesson(PreviewPage.linkToLesson_2_6)
        await expect(PreviewPage.lessonTitle).toHaveTitle("CourseKata - 2.6 The Structure of Data");
        await expect(PreviewPage.dataCampQuestion).toBeDisplayed()
    });
    it('CK-155:Preview page has a previous or next chapters', async () => {
        await PreviewPage.goToNextLesson()
        await expect(PreviewPage.lessonTitle).toHaveTitle("CourseKata - 2.7 Manipulating Data")
        await PreviewPage.open("PreviewPageUrl");
        await PreviewPage.goToLesson(PreviewPage.linkToLesson_2_6)
        await PreviewPage.goToPreviousLesson()
        await expect(PreviewPage.lessonTitle).toHaveTitle("CourseKata - 2.5 Sampling from a Population")
    });
    it('CK-156:Preview page has a videos', async () => {
        await PreviewPage.open("PreviewPageUrl")
        await PreviewPage.goToLesson(PreviewPage.linkToLesson_4_2)
        await expect(PreviewPage.lessonTitle).toHaveTitle("CourseKata - 4.2 Outcome and Explanatory Variables")
        await browser.switchToFrame(await PreviewPage.goToQuestionFrame("379090965"))//Video number
        await expect(PreviewPage.vimeoVideo).toBeExisting()
    });
});
