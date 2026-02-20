# agent-security-scanner-connectors

> Package 5: connectors for AI Security Scanner

## Installation

```bash
npm install @agent-security-scanner/agent-security-scanner-connectors
```

## Usage

```javascript
import { AgentSecurityScannerConnectors } from '@agent-security-scanner/agent-security-scanner-connectors';

const service = new AgentSecurityScannerConnectors();
await service.init();
const result = await service.execute({ data: 'test' });
```

## API

- `init()` - Initialize the service
- `execute(input)` - Execute the service
- `health()` - Health check

## License

MIT
