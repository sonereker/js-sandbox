import Teacher, { promote } from './Teacher'

// Default -> import ... from '';
// Named -> import { ... } from '';

const teacher = new Teacher('Can', 'MSc')
teacher.teach()

promote()
