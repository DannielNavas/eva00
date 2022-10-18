import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { GoogleAuthProvider, signInWithPopup, signOut } from '@firebase/auth';
import { addDoc, collection, collectionData, CollectionReference, deleteDoc, doc, docData, Firestore, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
    private ingresosCollection!: CollectionReference<any>;
    constructor(private auth: Auth, private readonly firestore: Firestore) {
        this.ingresosCollection = collection(this.firestore, 'ingresos');
    }

  loginWithGoogle() {
      return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

    logout() {
        return signOut(this.auth);
    }

    getAll() {
        return collectionData(this.ingresosCollection, {
            idField: 'id',
        }) as Observable<any[]>;
    }

    get(id: string) {
        const ingresosDocumentReference = doc(this.firestore, `ingresos/${id}`);
        return docData(ingresosDocumentReference, { idField: 'id' });
    }

    create(ingresos: any) {
        return addDoc(this.ingresosCollection, ingresos);
    }

    update(ingresos: any) {
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

}
