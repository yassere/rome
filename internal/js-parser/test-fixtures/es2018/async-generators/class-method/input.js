class Query {
    async *queryAll(ids) {
        for (const id of ids) {
            yield await this.query(id);
        }
    }
}
