/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable arrow-body-style */
/* eslint-disable object-curly-newline */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable object-curly-spacing */
/* eslint-disable import/no-unresolved */
// Test para Firestore

import {
    deleteTask,
    getTasks,
    updateTask,
    collection,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
    dislike,
    tapLike,
    saveTask,
    onSnapshot,
    addDoc,
    arrayRemove,
    arrayUnion,
    db,
    getTask,
} from '../src/firebase/configuracion.js';

jest.mock('../src/firebase/configuracion.js', () => {
    return {
        auth: jest.fn(() => {
            return { auth: 'TEST' };
        }),
        addDoc: jest.fn(),
        collection: jest.fn(),
        db: jest.fn(),
        onSnapshot: jest.fn(),
        deleteDoc: jest.fn(),
        getDoc: jest.fn(),
        doc: jest.fn(),
        updateDoc: jest.fn(),
        arrayUnion: jest.fn(),
        arrayRemove: jest.fn(),

    }
});

describe('Test for saveTask', () => {
    it('saveTask should be a function', () => {
        expect(typeof saveTask).toBe('function')
    });
    it('saveTask should call addDoc with its parameters.', () => {
        saveTask('test description');
        expect(addDoc).toHaveBeenCalledWith(
            collection(db, 'tasks'),
            { description: 'test description', likes: [] },
        )
    })
});

describe('Test for getTask', () => {
    it('onGetTasks should be a function', () => {
        expect(typeof getTasks).toBe('function')
    });
    it('getTask should call onSnapshot and its parameters', () => {
        getTask('callback');
        expect(onSnapshot).toHaveBeenCalledWith(collection(db, 'tasks'), 'callback')
    })
});

describe('Test for deleteTask', () => {
    it('deleteTask shoudl be a function', () => {
        expect(typeof deleteTask).toBe('function')
    });
    it('deleteTask should call deleteDco with its parameters', () => {
        deleteTask('id');
        expect(deleteDoc).toHaveBeenCalledWith(doc(db, 'tasks', 'id'))
    })
});

describe('Test for getTask2', () => {
    it('getTask should be a function', () => {
        expect(typeof getTask).toBe('function')
    });
    it('getTask should call getDoc and its parameters', () => {
        getTask('id');
        expect(getDoc).toHaveBeenCalledWith(doc(db, 'tasks', 'id'))
    })
});

describe('Test for updateTask', () => {
    it('updateTask shoudl be a function', () => {
        expect(typeof updateTask).toBe('function')
    });
    it('updateTask shoudl call updateDoc with its parameters.', () => {
        updateTask('id', 'edited post');
        expect(updateDoc).toHaveBeenCalledWith(doc(db, 'tasks', 'id'), 'edited post')
    })
});

describe('Test for tapLike', () => {
    it('tapLike shoudl be a function', () => {
        expect(typeof tapLike).toBe('function')
    });
    it('tapLike  shoudl call updateDoc and its parameters and add a like to a post', () => {
        tapLike('id1', 'user');
        expect(updateDoc).toHaveBeenCalledWith(doc(db, 'tasks', 'id1'), {
            likes: arrayUnion('user'),
        })
    })
});

describe('Test for dislike', () => {
    it('dislike debería ser una funcion', () => {
        expect(typeof dislike).toBe('function')
    });
    it('dislike  should debería called updateDoc with its parameters and remove a like from a post.', () => {
        dislike('id1', 'user');
        expect(updateDoc).toHaveBeenCalledWith(doc(db, 'tasks', 'id1'), {
            likes: arrayRemove('user'),
        })
    })
});
