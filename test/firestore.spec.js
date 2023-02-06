/* eslint-disable no-undef */
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
    arrayRemove,
    onSnapshot,
    updateTask,
    deleteTask,
    arrayUnion,
    collection,
    deleteDoc,
    updateDoc,
    getTasks,
    saveTask,
    saveUser,
    dislike,
    tapLike,
    getTask,
    getDoc,
    doc,
    db,
    addDoc,
} from '../src/firebase/configuracion.js';

jest.mock('../src/firebase/configuracion.js', () => {
    return {
        auth: jest.fn(() => {
            return { auth: 'TEST' };
        }),

        addDoc: jest.fn(),
        collection: jest.fn(),
        conFirestore: jest.fn(),
        onSnapshot: jest.fn(),
        deleteDoc: jest.fn(),
        getDoc: jest.fn(),
        doc: jest.fn(),
        updateDoc: jest.fn(),
        arrayUnion: jest.fn(),
        arrayRemove: jest.fn(),

        saveTask: jest.fn((description) => {
            if (!description) {
                throw new Error('ERROR');
            }
            return Promise.resolve({ user: 'admin' });
        }),

        saveUser: jest.fn((uid, email, pais) => {
            if (!uid || !email || !pais) {
                throw new Error('ERROR');
            }
            return Promise.resolve({ user: 'admin' });
        }),

        getTasks: jest.fn((collection) => {
            if (!collection) {
                throw new Error('ERROR');
            }
            return Promise.resolve({ user: 'admin' });
        }),

        getTask: jest.fn((id) => {
            if (!id) {
                throw new Error('ERROR');
            }
            return Promise.resolve({ user: 'admin' });
        }),

        deleteTask: jest.fn((id) => {
            if (!id) {
                throw new Error('ERROR');
            }
            return Promise.resolve({ user: 'admin' });
        }),

        updateTask: jest.fn((id, newFields) => {
            if (!id || !newFields) {
                throw new Error('ERROR');
            }
            return Promise.resolve({ user: 'admin' });
        }),

        dateTask: jest.fn((querySnapshot) => {
            if (!querySnapshot) {
                throw new Error('ERROR');
            }
            return Promise.resolve({ user: 'admin' });
        }),

        dislike: jest.fn((likes) => {
            if (likes === undefined) {
                throw new Error('ERROR');
            }
            return Promise.resolve({ user: 'admin' });
        }),

        tapLike: jest.fn((id, newLike) => {
            if (!id || !newLike) {
                throw new Error('ERROR');
            }
            return Promise.resolve({ user: 'admin' });
        }),
    }
});

// describe('Test for saveTask', () => {
//     it('saveTask should be a function', () => {
//         expect(typeof saveTask).toBe('function')
//     });

//     it('saveTask should call addDoc with its parameters.', () => {
//         saveTask('test description', []);
//         expect(addDoc).toHaveBeenCalledWith(
//             collection(db, 'tasks'),
//             {
//                 description: 'test description',
//                 likes: [],
//             },
//         )
//     });
// });

describe('Test for saveTask', () => {
    it('saveTask should be a function', () => {
      expect(typeof saveTask).toBe('function')
    });

    it('saveTask should call addDoc with its parameters.', async () => {
      await saveTask('test description')
      expect(addDoc).toHaveBeenCalledWith('test description')
    });

describe('Test for saveUser', () => {
    it('saveUser should be a function', () => {
        expect(typeof saveUser).toBe('function')
    });
    it('saveUser should call addDoc with its parameters.', () => {
        saveTask('test description');
        expect(saveUser).toHaveBeenCalledWith(
            collection(db, 'users'),
            { uid: 'xErqSqwE', email: 'admin@test.com', likes: [] },
        )
    })
});

describe('Test for getTasks', () => {
    it('GetTasks should be a function', () => {
        expect(typeof getTasks).toBe('function')
    });
    it('getTasks should call onSnapshot and its parameters', () => {
        getTask('callback');
        expect(onSnapshot).toHaveBeenCalledWith(collection(db, 'tasks'), 'callback')
    })
});

describe('Test for deleteTask', () => {
    it('deleteTask should be a function', () => {
        expect(typeof deleteTask).toBe('function')
    });
    it('deleteTask should call deleteDco with its parameters', () => {
        deleteTask('id');
        expect(deleteDoc).toHaveBeenCalledWith(doc(db, 'tasks', 'id'))
    })
});

describe('Test for getTask', () => {
    it('getTask should be a function', () => {
        expect(typeof getTask).toBe('function')
    });
    it('getTask should call getDoc and its parameters', () => {
        getTask('id');
        expect(getDoc).toHaveBeenCalledWith(doc(db, 'tasks', 'id'))
    })
});

describe('Test for updateTask', () => {
    it('updateTask should be a function', () => {
        expect(typeof updateTask).toBe('function')
    });
    it('updateTask should call updateDoc with its parameters.', () => {
        updateTask('id', 'edited post');
        expect(updateDoc).toHaveBeenCalledWith(doc(db, 'tasks', 'id'), 'edited post')
    })
});

describe('Test for dateTask', () => {
    it('dateTask should be a function', () => {
        expect(typeof updateTask).toBe('function')
    });
    it('updateTask should call updateDoc with its parameters.', () => {
        updateTask('id', 'edited post');
        expect(updateDoc).toHaveBeenCalledWith(doc(db, 'tasks', 'id'), 'edited post')
    })
});

describe('Test for tapLike', () => {
    it('tapLike should be a function', () => {
        expect(typeof tapLike).toBe('function')
    });
    it('tapLike  should call updateDoc and its parameters and add a like to a post', () => {
        tapLike('id1', 'user');
        expect(updateDoc).toHaveBeenCalledWith(doc(db, 'tasks', 'id'), {
            likes: arrayUnion('user'),
        })
    })
});

describe('Test for dislike', () => {
    it('should be a function', () => {
        expect(typeof dislike).toBe('function')
    });
    it('should call updateDoc with its parameters and remove a like from a post.', () => {
        dislike('id', 'user');
        expect(updateDoc).toHaveBeenCalledWith(doc(db, 'tasks', 'id'), {
            likes: arrayRemove('user'),
        })
    })
});
})
