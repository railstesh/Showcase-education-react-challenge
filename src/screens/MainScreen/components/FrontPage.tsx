import * as React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { IRootState } from "../../../common/mainReducer";
import { Button, ModalContainer } from "../../../sharedComponents";
import ModalContent from "./ModalContent";
import { getUniversities, setEducationDetails } from "../actions";
import "../styles.css";

const mapStateToProps = (state: IRootState) => ({
    universities: state.educations.universities,
    eduDetails: state.educations.data,
    user: state.users
});

const mapDispatchToProps = {
    setEducationDetails,
    getUniversities
};

type Props = ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps;

const FrontPage: React.FC<Props> = (props: Props) => {
    const [isModalOpen, setToggle] = useState<boolean>(false);

    const handleToggle = () => {
        setToggle(!isModalOpen)
    }

    return (
        <div>
            <div className='row m-0'>
                <div className='col-lg-12 mt-5'>
                    <h5 className="text-center">{`Welcome to Education Board of ${props.user.name}`}</h5>
                    <Button onClick={handleToggle}>Add Education</Button>
                    <ModalContainer isOpen={isModalOpen} onBackgroundClick={handleToggle} onEscapeKeydown={handleToggle} >
                        <ModalContent universities={props.universities} handleToggle={handleToggle} setEducationDetails={props.setEducationDetails} getUniversities={props.getUniversities} />
                    </ModalContainer>
                </div>
            </div>
            <div className='row m-0'>
                <div className='col-lg-3'>
                    <div className='left-panel p-2'><strong>University</strong>
                        {props.eduDetails && props.eduDetails.length === 0 && <p>Add Your Details First</p>}
                        {props.eduDetails && props.eduDetails.length > 0 && props.eduDetails.map((education, index: number) => (
                            <p key={`side-${index}`}>{education.university} University</p>
                        ))}
                    </div>
                </div>
                <div className='col-lg-9 right-panel'>
                    {props.eduDetails && props.eduDetails.length === 0 && <p>No Details Yet..</p>}
                    {props.eduDetails &&
                        props.eduDetails.length > 0 &&
                        props.eduDetails.map((education, index) => (
                            <div key={index} className='tabs education-details text-left ml-2'>
                                <div className="row">
                                    <div className='col-lg-12'>
                                        <label> <strong>{education.university}</strong> </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-lg-6'>
                                        <label> {education.startDate && education.startDate.toDateString()} </label>
                                    </div>
                                    <div className='col-lg-6'>
                                        <label> {education.endDate && education.endDate.toDateString()} </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-lg-6'>
                                        <label> {education.field} </label>
                                    </div>
                                    <div className='col-lg-6'>
                                        <label> {education.degree} </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-lg-6'>
                                        <label> {education.grade} grade</label>
                                    </div>
                                    <div className='col-lg-6'>
                                        <label> {education.description} </label>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(FrontPage);
