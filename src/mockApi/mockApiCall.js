export async function mockApiCall() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{
                'id': 1,
                'text': 'Clean desk',
                'completed': true
            },
            {
                'id': 2,
                'text': 'Wash windows',
                'completed': false
            },
            {
                'id': 3,
                'text': 'Take out trash',
                'completed': false
            }
            ])
        })
    })
}