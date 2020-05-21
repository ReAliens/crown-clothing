import { UserActionTypes } from './uset.types';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';


const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});


export const signupUser = ({ email, password, displayName }) => async (dispatch) => {

    try {
        const { user } = await auth.createUserWithEmailAndPassword(email, password)
        const userRef = await createUserProfileDocument(user, { displayName });

        userRef.get().then((snapshot => {
            dispatch(setCurrentUser({
                id: snapshot.id,
                ...snapshot.data()
            }))
        }));
    } catch (e) {
        alert('Something went wrong');
    }
}

export const loginUser = ({ email, password }) => async (dispatch) => {
    try {
        const { user } = await auth.signInWithEmailAndPassword(email, password);
        const userRef = await createUserProfileDocument(user);
        userRef.get().then((snapshot => {
            dispatch(setCurrentUser({
                id: snapshot.id,
                ...snapshot.data()
            }))
        }));
    } catch (e) {
        alert('Invalid username or password');
    }
}

export const logoutUser = () => async (dispach) => {
    await auth.signOut();
    dispach(setCurrentUser(null))
}