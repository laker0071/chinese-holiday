import PouchDB from 'pouchdb';

export class SingletonPouchDB {
    private static instanceDB: PouchDB.Database = new PouchDB('chinese_holiday');
    public static getInstance(): PouchDB.Database {
        return this.instanceDB;
    }
}