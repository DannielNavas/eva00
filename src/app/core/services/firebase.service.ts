import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { GoogleAuthProvider, signInWithPopup, signOut } from '@firebase/auth';
import { addDoc, collection, collectionData, CollectionReference, deleteDoc, doc, docData, Firestore, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IIngresos } from '@components/user/models/ingresos.interface';
import { IEgresos } from '@components/user/models/egresos.interface';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {
    private ingresosCollection!: CollectionReference<any>;
    private egresosCollection!: CollectionReference<any>;
    constructor(private auth: Auth, private readonly firestore: Firestore) {
        this.ingresosCollection = collection(this.firestore, 'ingresos');
        this.egresosCollection = collection(this.firestore, 'egresos');
    }

    loginWithGoogle() {
        return signInWithPopup(this.auth, new GoogleAuthProvider());
    }

    logout() {
        return signOut(this.auth);
    }

    getAll(): Observable<IIngresos[]> {
        return collectionData(this.ingresosCollection, {
            idField: 'id',
        });
    }

    get(id: string) {
        const ingresosDocumentReference = doc(this.firestore, `ingresos/${id}`);
        return docData(ingresosDocumentReference, { idField: 'id' });
    }

    create(ingresos: IIngresos) {
        return addDoc(this.ingresosCollection, ingresos);
    }

    update(ingresos: IIngresos) {
        const ingresosDocumentReference = doc(
            this.firestore,
            `ingresos/${ingresos.id}`
        );
        return updateDoc(ingresosDocumentReference, { ...ingresos });
    }

    delete(id: string) {
        const ingresosDocumentReference = doc(this.firestore, `ingresos/${id}`);
        return deleteDoc(ingresosDocumentReference);
    }

    // egresos

    getAllEgreso(): Observable<IEgresos[]> {
        return collectionData(this.egresosCollection, {
            idField: 'id',
        });
    }

    getEgreso(id: string) {
        const egresosDocumentReference = doc(this.firestore, `egresos/${id}`);
        return docData(egresosDocumentReference, { idField: 'id' });
    }

    createEgreso(ingresos: IEgresos) {
        return addDoc(this.egresosCollection, ingresos);
    }

    updateEgreso(ingresos: IEgresos) {
        const egresosDocumentReference = doc(
            this.firestore,
            `egresos/${ingresos.id}`
        );
        return updateDoc(egresosDocumentReference, { ...ingresos });
    }

    deleteEgreso(id: string) {
        const egresosDocumentReference = doc(this.firestore, `egresos/${id}`);
        return deleteDoc(egresosDocumentReference);
    }

}
