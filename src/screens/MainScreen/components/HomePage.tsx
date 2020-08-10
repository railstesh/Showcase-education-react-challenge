import * as React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { Input, Button } from "../../../sharedComponents";
import { setUserDetails } from "../actions";
import { history } from "../../../common/history";
import { IRootState } from "../../../common/mainReducer";

const mapStateToProps = (state: IRootState) => ({
    details: state.users,
});

const mapDispatchToProps = {
    setUserDetails,
};

type Props = ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps;

const HomePage: React.FC<Props> = (props: Props) => {
    const [name, setName] = useState<string>("");

    const handleSubmit = () => {
        props.setUserDetails(name);
        history.push('/dashboard');
    }

    return (
        <div className="d-flex flex-column h-100 align-items-center justify-content-center">
            <h5 className="text-center">WELCOME</h5>
            <Input name="username" placeholder='Enter Your Name' width={'24%'} value={name} onChange={(ev: any) => { setName(ev.target.value) }} />
            <Button className="mt-3" disabled={name.length === 0} onClick={handleSubmit}>Submit</Button>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
