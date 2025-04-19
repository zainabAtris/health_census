// healthcare census - health_analysis.js

// Sample data (replace with actual data or fetch from a database)
const healthcareData = [
  { age: 25, gender: 'Male', condition: 'Healthy', region: 'North' },
  { age: 40, gender: 'Female', condition: 'Diabetic', region: 'South' },
  { age: 65, gender: 'Male', condition: 'Hypertensive', region: 'East' },
  { age: 30, gender: 'Female', condition: 'Healthy', region: 'West' },
];

// Function to filter data by condition
function filterByCondition(data, condition) {
  return data.filter(entry => entry.condition === condition);
}

// Function to calculate average age
function calculateAverageAge(data) {
  const totalAge = data.reduce((sum, entry) => sum + entry.age, 0);
  return (data.length > 0) ? (totalAge / data.length).toFixed(2) : 0;
}

// Function to group data by region
function groupByRegion(data) {
  return data.reduce((groups, entry) => {
    if (!groups[entry.region]) {
      groups[entry.region] = [];
    }
    groups[entry.region].push(entry);
    return groups;
  }, {});
}

// Example usage
const diabeticPatients = filterByCondition(healthcareData, 'Diabetic');
console.log('Diabetic Patients:', diabeticPatients);

const averageAge = calculateAverageAge(healthcareData);
console.log('Average Age:', averageAge);

const groupedByRegion = groupByRegion(healthcareData);
console.log('Grouped by Region:', groupedByRegion);