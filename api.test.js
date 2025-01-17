// api.test.js

const fetchTrainLines = async () => {
    try {
        const response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('http://www.railwaycodes.org.uk/line/line_names.shtm'));
        
        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();
        const parser = new DOMParser();
        const doc = parser.parseFromString(data.contents, 'text/html');
        const table = doc.querySelector('table');
        const rows = Array.from(table.querySelectorAll('tr')).slice(1); // Skip header row
        
        // Extract line names and routes
        return rows.map(row => {
            const [line, route] = row.querySelectorAll('td');
            return {
                line: line.textContent.trim(),
                route: route.textContent.trim()
            };
        });
    } catch (error) {
        console.error('Error fetching train lines:', error);
        return [];
    }
};

describe('API Function Tests', () => {
    test('fetchTrainLines retrieves and parses train line data', async () => {
        const trainLines = await fetchTrainLines();
        
        // Check that the result is an array
        expect(Array.isArray(trainLines)).toBe(true);
        
        // Check that the first item has expected properties
        if (trainLines.length > 0) {
            expect(trainLines[0]).toHaveProperty('line');
            expect(trainLines[0]).toHaveProperty('route');
        }
    });

    test('fetchTrainLines handles network errors gracefully', async () => {
        // Mocking fetch to simulate a network error
        global.fetch = jest.fn(() =>
            Promise.reject(new Error('Network error'))
        );

        const result = await fetchTrainLines();
        
        // Expect an empty array on error
        expect(result).toEqual([]);
    });

    test('fetchTrainLines handles non-OK responses', async () => {
        // Mocking fetch to simulate a non-OK response
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: false,
                statusText: 'Not Found'
            })
        );

        const result = await fetchTrainLines();
        
        // Expect an empty array on non-OK response
        expect(result).toEqual([]);
    });
});
