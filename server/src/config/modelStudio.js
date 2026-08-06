// Alibaba Cloud Model Studio (DashScope) configuration.
// Model Studio exposes an OpenAI-compatible endpoint, so we call it with a
// plain REST POST rather than needing a proprietary SDK.

export const MODEL_STUDIO_BASE_URL =
  process.env.MODEL_STUDIO_BASE_URL ||
  "https://dashscope-intl.aliyuncs.com/compatible-mode/v1";

export const MODEL_STUDIO_API_KEY = process.env.MODEL_STUDIO_API_KEY || "";

export const MODEL_STUDIO_MODEL = process.env.MODEL_STUDIO_MODEL || "qwen-plus";

export const isModelStudioConfigured = () => Boolean(MODEL_STUDIO_API_KEY);
