// search.test.js

// Initail test with mock data
let trainLines = [];

// Function to perform search
function performSearch(lineNameQuery, routeQuery, searchType) {
    const resultsContainer = document.getElementById("searchResults");
    
    // Clear previous results
    resultsContainer.innerHTML = '';

    // Check if at least one input field is filled
    if (!lineNameQuery && !routeQuery) {
        resultsContainer.innerHTML = '<p>Please fill at least one input field.</p>';
        return;
    }

    // Prepare regex patterns from user input
    const lineRegexQuery = lineNameQuery.replace(/\*/g, '.*').replace(/%/g, '.*'); // Convert * or % to regex
    const routeRegexQuery = routeQuery.replace(/\*/g, '.*').replace(/%/g, '.*'); // Convert * or % to regex

    // Create case-insensitive regex
    const lineRegex = new RegExp(`^${lineRegexQuery}$`, 'i'); 
    const routeRegex = new RegExp(`^${routeRegexQuery}$`, 'i'); 

    let filteredData;

    if (searchType === "AND") {
        filteredData = trainLines.filter(item => 
            (lineNameQuery ? lineRegex.test(item.line) : true) && 
            (routeQuery ? routeRegex.test(item.route) : true)
        );
    } else { // OR case
        filteredData = trainLines.filter(item => 
            (lineNameQuery ? lineRegex.test(item.line) : false) || 
            (routeQuery ? routeRegex.test(item.route) : false)
        );
    }

    // Display results
    if (filteredData.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    } else {
        const table = document.createElement('table');
        const headerRow = `<tr><th>Line Name</th><th>Route</th></tr>`;
        table.innerHTML = headerRow + filteredData.map(
            item => `<tr><td>${item.line}</td><td>${item.route}</td></tr>`
        ).join('');
        resultsContainer.appendChild(table);
    }
}

describe('Search Functionality Unit Tests', () => {
  beforeEach(() => {
      document.body.innerHTML = `
          <input id="lineNameInput" type="text" />
          <input id="routeInput" type="text" />
          <select id="searchType">
              <option value="AND">AND</option>
              <option value="OR">OR</option>
          </select>
          <div id="searchResults"></div>
      `;
      
      // Mocking the trainLines data for tests
      trainLines = [
          { line: 'Line A', route: 'Route A' },
          { line: 'Line B', route: 'Route B' }
      ];
  });

  test('performSearch shows no results found message when no input is provided', () => {
      performSearch('', '', 'AND');
      const resultsContainer = document.getElementById("searchResults");
      expect(resultsContainer.innerHTML).toContain('Please fill at least one input field.');
  });

  test('performSearch returns correct results for AND search', () => {
      performSearch('Line A', '', 'AND');
      const resultsContainer = document.getElementById("searchResults");
      expect(resultsContainer.innerHTML).toContain('Line A');
      expect(resultsContainer.innerHTML).not.toContain('Line B');
  });

  test('performSearch returns correct results for OR search', () => {
      performSearch('', 'Route B', 'OR');
      const resultsContainer = document.getElementById("searchResults");
      expect(resultsContainer.innerHTML).toContain('Line B');
  });

  test('performSearch shows no results found message when there are no matches', () => {
      performSearch('Nonexistent Line', '', 'AND');
      const resultsContainer = document.getElementById("searchResults");
      expect(resultsContainer.innerHTML).toContain('No results found.');
  });
});
