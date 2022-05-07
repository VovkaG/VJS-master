import React from 'react';
import uspehImg from "../assets/uspeh.png";
import '../styles/option6.css';

function option6() {

    class Chetene {
        constructor(chetene, obobshtavane) {
            this.chetene = chetene;
            this.obobshtavane = obobshtavane;
        }

        get chetene() {
            return this.chetene;
        }
        get obobshtavane() {
            return this.obobshtavane;
        }

    }

    class Student extends Chetene {
        constructor(id, grade) {
            this.id = id;
            this.grade = grade;
        }
        get grade() {
            return this.grade;
        }
    }


    class studentGrades extends Student {
        constructor(studentGrade) {
            this.studentGrade = studentGrade;
        }
        get dispersiq() {
            return this.studentGrade;
        }
    }


    return (
        <div>

            <h1>
                Информация за успеха на учениците
            </h1>


            <img className='uspehImg' src={uspehImg} />

        </div>
    )
}



export default option6;