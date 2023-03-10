interface CoursePartBase {
    name: string;
    exerciseCount: number;
  }

interface CoursePartDescriptionBase extends CoursePartBase {
    description:string
}

interface CoursePartRequirments extends CoursePartDescriptionBase {
    requirements:string[],
    kind: "special"
}
  
  interface CoursePartBasic extends CoursePartDescriptionBase {
    kind: "basic"
  }
  
  interface CoursePartGroup extends CoursePartBase {
    groupProjectCount: number;
    kind: "group"
  }
  
  interface CoursePartBackround extends CoursePartDescriptionBase {
    backroundMaterial: string;
    kind: "background"
  }
  
export type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackround | CoursePartRequirments;
  