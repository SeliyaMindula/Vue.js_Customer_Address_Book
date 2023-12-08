<template>
    <nav>

        <div>
            <h1>Customer List</h1>
            <ul>
                <li v-for="customer in customers" :key="customer.id">
                    {{ customer.name }}
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'ListView',
    data() {
        return {
            customers: [
                // Sample customer data
                { id: 1, name: 'John Doe' },
                { id: 2, name: 'Jane Smith' }
                // ... more customers
            ]
        }
    }
}
</script>

<style scoped>

</style>
