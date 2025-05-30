import base from "./airtable-client"

// Function to fetch all records from a table
export async function fetchAllRecords(tableName: string) {
  try {
    const records = await base(tableName).select().all()
    return records.map((record) => ({
      id: record.id,
      ...record.fields,
    }))
  } catch (error) {
    console.error(`Error fetching records from ${tableName}:`, error)
    throw error
  }
}

// Function to fetch a single record by ID
export async function fetchRecordById(tableName: string, recordId: string) {
  try {
    const record = await base(tableName).find(recordId)
    return {
      id: record.id,
      ...record.fields,
    }
  } catch (error) {
    console.error(`Error fetching record from ${tableName}:`, error)
    throw error
  }
}

// Function to fetch records with a filter
export async function fetchRecordsWithFilter(tableName: string, filterFormula: string) {
  try {
    const records = await base(tableName)
      .select({
        filterByFormula: filterFormula,
      })
      .all()

    return records.map((record) => ({
      id: record.id,
      ...record.fields,
    }))
  } catch (error) {
    console.error(`Error fetching filtered records from ${tableName}:`, error)
    throw error
  }
}

// Function to create a new record
export async function createRecord(tableName: string, fields: Record<string, any>) {
  try {
    const createdRecords = await base(tableName).create([{ fields }])
    return {
      id: createdRecords[0].id,
      ...createdRecords[0].fields,
    }
  } catch (error) {
    console.error(`Error creating record in ${tableName}:`, error)
    throw error
  }
}

// Function to update a record
export async function updateRecord(tableName: string, recordId: string, fields: Record<string, any>) {
  try {
    const updatedRecord = await base(tableName).update(recordId, fields)
    return {
      id: updatedRecord.id,
      ...updatedRecord.fields,
    }
  } catch (error) {
    console.error(`Error updating record in ${tableName}:`, error)
    throw error
  }
}
